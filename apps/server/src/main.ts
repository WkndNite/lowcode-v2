import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { GlobalExceptionFilter } from "./common/exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用CORS
  app.enableCors();

  // 注册全局异常过滤器
  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
