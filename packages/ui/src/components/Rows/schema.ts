import { type Static, Type } from "@sinclair/typebox";
import { getSchema } from "@/utils/schema";

const display = Type.Boolean({
  code: "config-switch",
  title: "显示控制",
  default: true,
  description: "控制组件是否显示",
});

const rowCount = Type.Number({
  code: "config-input",
  title: "行数",
  default: 1,
  minimum: 1,
  maximum: 12,
});

const gap = Type.Union([Type.String(), Type.Number()], {
  code: "config-input",
  title: "行间距",
  default: "16px",
  placeholder: "支持px、%等单位或数字",
});

const rowHeight = Type.String({
  code: "config-input",
  title: "行高度",
  default: "auto",
  placeholder: "支持px、%等单位或auto",
});

const schema = Type.Object({
  display: getSchema(display),
  rowCount: getSchema(rowCount),
  gap: getSchema(gap),
  rowHeight: getSchema(rowHeight),
});

export const RowsSchema = schema;
export type RowsSchemaType = Static<typeof schema>;
