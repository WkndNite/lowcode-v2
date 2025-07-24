import { type Static, Type } from "@sinclair/typebox";
import { getSchema } from "@/utils/schema";

const display = Type.Boolean({
  code: "config-switch",
  title: "显示控制",
  default: true,
  description: "控制组件是否显示",
});

const size = Type.Union([Type.String(), Type.Number()], {
  code: "config-input",
  title: "留白尺寸",
  default: "16px",
  placeholder: "支持px、%等单位或数字",
});

const direction = Type.Union(
  [Type.Literal("horizontal"), Type.Literal("vertical")],
  {
    code: "config-select",
    title: "留白方向",
    default: "vertical",
    options: [
      { label: "水平", value: "horizontal" },
      { label: "垂直", value: "vertical" },
    ],
  },
);

const schema = Type.Object({
  display: getSchema(display),
  size: getSchema(size),
  direction: getSchema(direction),
});

export const BlankSchema = schema;
export type BlankSchemaType = Static<typeof schema>;
