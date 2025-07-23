import { type Static, Type } from "@sinclair/typebox";
import { getSchema } from "@/utils/schema";

// 显示状态 - 与Image保持一致的布尔类型控制
const display = Type.Boolean({
  code: "config-switch",
  title: "显示",
  default: true,
  description: "控制文本是否显示",
});

// 文本内容 - 对应Image的src属性
const content = Type.String({
  code: "config-textarea",
  title: "文本内容",
  default: "请输入文本",
  placeholder: "输入要显示的文本内容",
});

// 宽度属性 - 与Image保持一致的定义
const width = Type.String({
  code: "config-input",
  title: "宽度",
  default: "100%",
  placeholder: "支持px、%等单位",
});

// 高度属性 - 与Image保持一致的定义
const height = Type.String({
  code: "config-input",
  title: "高度",
  default: "auto",
  placeholder: "支持px、%等单位",
});

// 字体大小 - 文本特有属性
const fontSize = Type.String({
  code: "config-input",
  title: "字体大小",
  default: "16px",
  placeholder: "支持px、rem等单位",
});

// 字体颜色 - 文本特有属性
const color = Type.String({
  code: "config-color",
  title: "字体颜色",
  default: "#333333",
});

// 对齐方式 - 使用Type.Union定义枚举类型，与Image的objectFit保持一致
const textAlign = Type.Union(
  [Type.Literal("left"), Type.Literal("center"), Type.Literal("right")],
  {
    code: "config-select",
    title: "对齐方式",
    default: "left",
    options: [
      { label: "左对齐", value: "left" },
      { label: "居中对齐", value: "center" },
      { label: "右对齐", value: "right" },
    ],
  },
);

// 组合所有属性 - 与Image保持相同的结构
const schema = Type.Object({
  display: getSchema(display),
  content: getSchema(content),
  width: getSchema(width),
  height: getSchema(height),
  fontSize: getSchema(fontSize),
  color: getSchema(color),
  textAlign: getSchema(textAlign),
});

export const TextSchema = schema;
// 添加类型导出 - 与Image组件保持一致
export type TextSchemaType = Static<typeof schema>;
