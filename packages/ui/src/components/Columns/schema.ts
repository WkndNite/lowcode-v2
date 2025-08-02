import { type Static, Type } from "@sinclair/typebox";
import { getSchema } from "@/utils/schema";

const display = Type.Boolean({
  code: "config-switch",
  title: "显示控制",
  default: true,
  description: "控制组件是否显示",
});

const columnCount = Type.Number({
  code: "config-input",
  title: "列数",
  default: 1,
  minimum: 1,
  maximum: 12,
});

const gap = Type.Union([Type.String(), Type.Number()], {
  code: "config-input",
  title: "列间距",
  default: "16px",
  placeholder: "支持px、%等单位或数字",
});

const columnWidth = Type.String({
  code: "config-input",
  title: "列宽度",
  default: "auto",
  placeholder: "支持px、%等单位或auto",
});

const schema = Type.Object({
  display: getSchema(display),
  columnCount: getSchema(columnCount),
  gap: getSchema(gap),
  columnWidth: getSchema(columnWidth),
});

export const ColumnsSchema = schema;
export type ColumnsSchemaType = Static<typeof schema>;
