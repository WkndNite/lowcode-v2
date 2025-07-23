// 组件
import { default as ZmwImage } from "@/components/Image";
// Schema
import { ImageSchema } from "@/components/Image/schema";
import { default as ZmwText } from "@/components/Text";
import { TextSchema } from "@/components/Text/schema";
import { default as ZmwVideo } from "@/components/Video";
import { VideoSchema } from "@/components/Video/schema";

// 函数方法
import { getSchema as _getSchema } from "@/utils/schema";

export { ZmwImage, ZmwText, ZmwVideo };

export const schemas = {
  ImageSchema,
  TextSchema,
  VideoSchema,
};

export const getSchema = _getSchema;
