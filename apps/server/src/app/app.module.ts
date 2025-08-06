import { Module } from "@nestjs/common";
import { PageModule } from "../page/page.module";
import { PrismaModule } from "../prisma/prisma.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [PrismaModule, PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
