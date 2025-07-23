import { type Static, Type } from "@sinclair/typebox";
import { getSchema } from "@/utils/schema";

// 显示状态
const display = Type.Boolean({
  code: "config-switch",
  title: "显示",
  default: true,
  description: "控制视频是否显示",
});

// 视频地址 - 对应Image的src属性
export const src = Type.String({
  code: "config-files",
  title: "视频地址",
  default: "",
  placeholder: "请上传视频或输入URL",
});

// 宽度属性
const width = Type.String({
  code: "config-input",
  title: "宽度",
  default: "100%",
  placeholder: "支持px、%等单位",
});

// 高度属性
const height = Type.String({
  code: "config-input",
  title: "高度",
  default: "300px",
  placeholder: "支持px、%等单位",
});

// 适应方式 - 与Image的objectFit完全一致
export const objectFit = Type.Union(
  [
    Type.Literal("cover"),
    Type.Literal("contain"),
    Type.Literal("fill"),
    Type.Literal("none"),
    Type.Literal("scale-down"),
  ],
  {
    code: "config-select",
    title: "适应方式",
    default: "cover",
    options: [
      { label: "覆盖", value: "cover" },
      { label: "包含", value: "contain" },
      { label: "填充", value: "fill" },
      { label: "原始大小", value: "none" },
      { label: "等比缩小", value: "scale-down" },
    ],
  },
);

// 跳转链接
const link = Type.String({
  code: "config-input",
  title: "跳转链接",
  default: "",
  placeholder: "点击视频跳转的链接地址",
});

// 视频控制栏
const controls = Type.Boolean({
  code: "config-switch",
  title: "显示控制栏",
  default: true,
});

// 组合所有属性
const schema = Type.Object({
  display: getSchema(display),
  src: getSchema(src),
  width: getSchema(width),
  height: getSchema(height),
  objectFit: getSchema(objectFit),
  link: getSchema(link),
  controls: getSchema(controls),
});

export const VideoSchema = schema;
export type VideoSchemaType = Static<typeof schema>;
