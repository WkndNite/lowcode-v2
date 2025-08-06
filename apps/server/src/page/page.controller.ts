import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
} from "@nestjs/common";
import type { Page, Prisma } from "@prisma/client";
import { JoiValidationPipe } from "src/common/joi-validation.pipe";
import { ApiResponse } from "../common/response";
import { createPageSchema, updatePageSchema } from "./page.schema";
import { PageService } from "./page.service";

@Controller("pages")
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get()
  async getPages(
    @Query("take", new ParseIntPipe({ optional: true })) take?: number,
    @Query("cursor", new ParseIntPipe({ optional: true })) cursor?: number,
  ) {
    const result = await this.pageService.pages({
      take,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: {
        id: "asc",
      },
    });
    return ApiResponse.successWithPagination(
      result.data,
      result.nextCursor,
      "获取分页数据成功",
    );
  }

  @Get(":id")
  async getPage(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<ApiResponse<Page | null>> {
    const page = await this.pageService.page({ id });
    if (!page) {
      return ApiResponse.notFound(`id为${id}的页面不存在`);
    }
    return ApiResponse.success(page, "获取页面成功");
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createPageSchema))
  async createPage(
    @Body() data: Prisma.PageCreateInput,
  ): Promise<ApiResponse<Page | null>> {
    const page = await this.pageService.createPage(data);
    return ApiResponse.success(page, "创建页面成功");
  }

  @Put(":id")
  @UsePipes(new JoiValidationPipe(updatePageSchema))
  async updatePage(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: Prisma.PageUpdateInput,
  ): Promise<ApiResponse<Page>> {
    const page = await this.pageService.updatePage({
      where: { id },
      data,
    });
    return ApiResponse.success(page, "更新页面成功");
  }

  @Delete(":id")
  async deletePage(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<ApiResponse<Page>> {
    const page = await this.pageService.deletePage({ id });
    return ApiResponse.success(page, "删除页面成功");
  }
}
