import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { user, user_role } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { Profile } from "passport-github2";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    username: string,
    password: string,
    email?: string,
    role?: user_role,
  ) {
    // 检查用户是否已存在
    const existingUser = await this.prisma.user.findUnique({
      where: { username },
    });
    if (existingUser) {
      throw new BadRequestException("用户名已存在");
    }

    // 哈希密码
    const hashedPassword = await bcrypt.hash(password, 10);

    // 创建新用户，如果未指定角色则默认为'user'
    const user = await this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
        role: role || ("user" as user_role), // 添加角色参数，默认为'user'
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
      },
    });

    return user;
  }

  async login(username: string, password: string) {
    // 查找用户
    const user = await this.prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      throw new UnauthorizedException("用户不存在");
    }

    // 检查用户是否被禁用
    if (user.disabled) {
      throw new UnauthorizedException("用户已被禁用");
    }

    // 验证密码
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("密码错误");
    }

    // 生成JWT令牌
    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };
    const token = this.jwtService.sign(payload);

    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      token,
    };
  }

  async validateUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        role: true,
        disabled: true,
      },
    });

    // 如果用户不存在或被禁用，返回null
    if (!user || user.disabled) {
      return null;
    }

    return user;
  }

  // GitHub登录/注册
  async findOrCreateGithubUser(profile: Profile) {
    const { id, username: login, _json, emails } = profile;
    const email = emails?.[0]?.value;
    console.log(emails);

    // 根据id查找已存在用户
    let user = await this.prisma.user.findUnique({
      where: { github_id: Number(id) },
    });
    // 根据username查找已存在用户
    // 防止id变动引起的光用id没找到的现象
    if (!user && login) {
      user = await this.prisma.user.findUnique({
        where: { github_login: login },
      });
    }

    // 如果不存在，创建新用户
    if (!user) {
      // 生成随机密码
      const randomPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(randomPassword, 10);

      user = await this.prisma.user.create({
        data: {
          username: login || `github_${id}`,
          password: hashedPassword,
          github_id: Number(id),
          github_login: login,
          email: email,
          github_info: _json,
          role: "user",
          status: "active",
        },
      });
    } else {
      // 更新已存在用户的信息
      user = await this.prisma.user.update({
        where: { id: user.id },
        data: {
          github_info: _json,
          ...(email && { email: email }),
        },
      });
    }

    return user;
  }

  // 生成GitHub登录后的JWT令牌
  async generateGithubToken(user: user) {
    // 检查用户是否被禁用
    if (user.disabled) {
      throw new UnauthorizedException("用户已被禁用");
    }

    const payload = { sub: user.id, username: user.username, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        email: user.email,
        phone: user.phone,
      },
    };
  }

  // 获取用户列表
  async getUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        status: true,
        disabled: true, // 添加这一行
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
  }

  // 禁用用户
  async disableUser(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { disabled: true },
    });
  }
}
