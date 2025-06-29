import { type Static, Type } from "@sinclair/typebox";
import { getSchema } from "@/utils/schema";

const display = Type.Boolean({
  code: "config-switch",
  title: "设备",
  default: true,
});
const src = Type.String({
  code: "config-files",
  title: "图片",
  default: "",
});
const link = Type.String({
  code: "config-input",
  title: "链接",
  default: "",
  placeholder: "请输入链接",
});
const width = Type.String({
  code: "config-input",
  title: "宽度",
  default: "100%",
  placeholder: "请输入宽度",
});
const height = Type.String({
  code: "config-input",
  title: "高度",
  default: "300px",
  placeholder: "请输入高度",
});

const schema = Type.Object({
  display: getSchema(display),
  src: getSchema(src),
  link: getSchema(link),
  width: getSchema(width),
  height: getSchema(height),
});

export const ImageSchema = schema;
export type ImageSchemaType = Static<typeof schema>;
