import { type Static, Type } from "@sinclair/typebox";
import { getSchema } from "@/utils/schema";

const display = Type.Boolean({
  code: "config-switch",
  title: "设备",
  default: true,
  description: "控制使用的什么设备",
});
const src = Type.String({
  code: "config-files",
  title: "图片地址",
  default: "",
  placeholder: "请上传图片或输入URL",
});
const link = Type.String({
  code: "config-input",
  title: "跳转链接",
  default: "",
  placeholder: "点击图片跳转的链接地址",
});
const width = Type.String({
  code: "config-input",
  title: "宽度",
  default: "100%",
  placeholder: "支持px、%等单位",
});
const height = Type.String({
  code: "config-input",
  title: "高度",
  default: "300px",
  placeholder: "支持px、%等单位",
});

const objectFit = Type.Union(
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
  }
);

const alt = Type.String({
  code: "config-input",
  title: "替代文本",
  default: "",
  placeholder: "图片无法显示时的替代文本",
});

const schema = Type.Object({
  display: getSchema(display),
  src: getSchema(src),
  alt: getSchema(alt),
  width: getSchema(width),
  height: getSchema(height),
  objectFit: getSchema(objectFit),
  link: getSchema(link),
});

export const ImageSchema = schema;
export type ImageSchemaType = Static<typeof schema>;
