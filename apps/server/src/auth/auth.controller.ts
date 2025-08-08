import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { user, user_role } from "@prisma/client";
import { JoiValidationPipe } from "../common/joi-validation.pipe";
import { ApiResponse } from "../common/response";
import { JwtAuthGuard } from "./auth.guard";
import { createUserSchema, loginSchema } from "./auth.schema";
import { AuthService } from "./auth.service";

export interface RequestWithUser extends Request {
  user: user;
}

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @UsePipes(new JoiValidationPipe(createUserSchema))
  async register(
    @Body()
    body: {
      username: string;
      password: string;
      email?: string;
      role?: user_role;
    },
  ) {
    const user = await this.authService.register(
      body.username,
      body.password,
      body.email,
      body.role,
    );
    return ApiResponse.success(user, "注册成功");
  }

  @Post("login")
  @UsePipes(new JoiValidationPipe(loginSchema))
  async login(@Body() body: { username: string; password: string }) {
    const result = await this.authService.login(body.username, body.password);
    return ApiResponse.success(result, "登录成功");
  }

  // 获取用户列表
  @Get("users")
  @UseGuards(JwtAuthGuard)
  async getUsers() {
    const users = await this.authService.getUsers();
    return ApiResponse.success(users, "获取用户列表成功");
  }

  // 禁用用户（仅管理员可操作）
  @Post("users/:id/disable")
  @UseGuards(JwtAuthGuard)
  async disableUser(@Req() req: RequestWithUser, @Param("id") id: string) {
    // 检查当前用户是否为管理员
    if (req.user.role !== "admin") {
      throw new BadRequestException("只有管理员可以执行此操作");
    }

    const user = await this.authService.disableUser(id);
    return ApiResponse.success(user, "用户已禁用");
  }

  // GitHub登录
  @Get("github")
  @UseGuards(AuthGuard("github"))
  githubLogin() {
    // 重定向到GitHub授权页面
  }

  // GitHub回调
  @Get("github/callback")
  @UseGuards(AuthGuard("github"))
  async githubCallback(@Req() req: RequestWithUser) {
    const result = await this.authService.generateGithubToken(req.user);
    return ApiResponse.success(result, "GitHub登录成功");
  }
}
