export class ApiResponse<T> {
  constructor(
    public readonly code: number,
    public readonly message: string,
    public readonly data: T | null = null,
  ) {}

  static success<T>(data: T, message: string = "操作成功"): ApiResponse<T> {
    return new ApiResponse(200, message, data);
  }

  static successWithPagination<T>(
    data: T[],
    nextCursor: number | null,
    message: string = "操作成功",
  ): ApiResponse<{ data: T[]; nextCursor: number | null }> {
    return new ApiResponse(200, message, { data, nextCursor });
  }

  static error(
    code: number = 500,
    message: string = "操作失败",
  ): ApiResponse<null> {
    return new ApiResponse(code, message, null);
  }

  static badRequest(message: string = "参数错误"): ApiResponse<null> {
    return new ApiResponse(400, message, null);
  }

  static notFound(message: string = "资源不存在"): ApiResponse<null> {
    return new ApiResponse(404, message, null);
  }
}
