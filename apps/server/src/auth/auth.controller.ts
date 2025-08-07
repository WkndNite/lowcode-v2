import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { JoiValidationPipe } from "../common/joi-validation.pipe";
import { ApiResponse } from "../common/response";
import { createUserSchema, loginSchema } from "./auth.schema";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @UsePipes(new JoiValidationPipe(createUserSchema))
  async register(
    @Body() body: { username: string; password: string; email?: string },
  ) {
    const user = await this.authService.register(
      body.username,
      body.password,
      body.email,
    );
    return ApiResponse.success(user, "注册成功");
  }

  @Post("login")
  @UsePipes(new JoiValidationPipe(loginSchema))
  async login(@Body() body: { username: string; password: string }) {
    const result = await this.authService.login(body.username, body.password);
    return ApiResponse.success(result, "登录成功");
  }
}
