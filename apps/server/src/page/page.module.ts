import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaModule } from "../prisma/prisma.module";
import { PageController } from "./page.controller";
import { PageService } from "./page.service";

@Module({
  imports: [PrismaModule],
  providers: [PrismaService, PageService],
  controllers: [PageController],
})
export class PageModule {}
