import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PageModule } from "../page/page.module";
import { PrismaModule } from "../prisma/prisma.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [PrismaModule, PageModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
