import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { GlobalExceptionFilter } from "./common/exception.filter";
import { LoggingInterceptor } from "./common/logging.interceptor"; // 添加这一行

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用CORS
  app.enableCors();

  // 注册全局异常过滤器
  app.useGlobalFilters(new GlobalExceptionFilter());

  // 注册全局日志拦截器
  app.useGlobalInterceptors(new LoggingInterceptor()); // 添加这一行

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
