import { Controller, Get } from "@nestjs/common";
import { ApiResponse } from "../common/response";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("app")
  getHello() {
    const message = this.appService.getHello();
    return ApiResponse.success(message, "请求成功");
  }
}
