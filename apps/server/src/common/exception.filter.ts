import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import type { Response } from "express";
import { ApiResponse } from "./response";

function hasMessageField(obj: unknown): obj is { message?: string } {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "message" in obj &&
    typeof (obj as Record<string, unknown>).message === "string"
  );
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "服务器内部错误";

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === "string") {
        message = exceptionResponse;
      } else if (hasMessageField(exceptionResponse)) {
        message = exceptionResponse.message ?? message;
      }
    } else if (exception instanceof Error) {
      message = exception.message ?? message;
    }

    const apiResponse = ApiResponse.error(status, message);
    response.status(status).json(apiResponse);
  }
}
