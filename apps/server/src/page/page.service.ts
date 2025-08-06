import { Injectable } from "@nestjs/common";
import type { Page, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PageService {
  constructor(private prisma: PrismaService) {}

  async page(
    pageWhereUniqueInput: Prisma.PageWhereUniqueInput,
  ): Promise<Page | null> {
    return this.prisma.page.findUnique({
      where: pageWhereUniqueInput,
    });
  }

  async pages(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PageWhereUniqueInput;
    where?: Prisma.PageWhereInput;
    orderBy?: Prisma.PageOrderByWithRelationInput;
  }): Promise<{ data: Page[]; nextCursor: number | null }> {
    const { skip, take, cursor, where, orderBy } = params;
    const takeValue = take ?? 10;

    const pages = await this.prisma.page.findMany({
      skip,
      take: takeValue + 1, // 多取一条记录来判断是否还有更多数据
      cursor,
      where,
      orderBy,
    });

    let nextCursor: number | null = null;
    if (pages.length > takeValue) {
      // 如果查询结果比请求的数量多，说明还有更多数据
      const nextItem = pages.pop(); // 移除多取的那条记录
      nextCursor = nextItem?.id ?? null; // 使用最后一条记录的id作为下一个游标
    }

    return {
      data: pages,
      nextCursor,
    };
  }

  async createPage(data: Prisma.PageCreateInput): Promise<Page> {
    return this.prisma.page.create({
      data,
    });
  }

  async updatePage(params: {
    where: Prisma.PageWhereUniqueInput;
    data: Prisma.PageUpdateInput;
  }): Promise<Page> {
    const { where, data } = params;
    return this.prisma.page.update({
      data,
      where,
    });
  }

  async deletePage(where: Prisma.PageWhereUniqueInput): Promise<Page> {
    return this.prisma.page.delete({
      where,
    });
  }
}
