// 组件

import { default as ZmwBlank } from "@/components/Blank";
import { BlankSchema } from "@/components/Blank/schema";
import { default as ZmwImage } from "@/components/Image";
import { ImageSchema } from "@/components/Image/schema";
import { default as ZmwSlider } from "@/components/Slider";
import { SliderSchema } from "@/components/Slider/schema";
import { default as ZmwText } from "@/components/Text";
import { TextSchema } from "@/components/Text/schema";
import { default as ZmwVideo } from "@/components/Video";
import { VideoSchema } from "@/components/Video/schema";

// 函数方法
import { getSchema as _getSchema } from "@/utils/schema";

export { ZmwImage, ZmwText, ZmwVideo, ZmwSlider, ZmwBlank };

export const schemas = {
  ImageSchema,
  TextSchema,
  VideoSchema,
  SliderSchema,
  BlankSchema,
};

export const getSchema = _getSchema;
