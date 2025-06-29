// 组件
import { default as ZmwImage } from "@/components/Image";

// Schema
import { ImageSchema } from "@/components/Image/schema";

// 函数方法
import { getSchema as _getSchema } from "@/utils/schema";

export { ZmwImage };

export const schemas = {
  ImageSchema,
};

export const getSchema = _getSchema;
