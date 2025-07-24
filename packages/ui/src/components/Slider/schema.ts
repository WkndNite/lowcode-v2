import { type Static, Type } from "@sinclair/typebox";
import { getSchema } from "@/utils/schema";

const display = Type.Boolean({
  code: "config-switch",
  title: "显示控制",
  default: true,
  description: "控制组件是否显示",
});

const src = Type.Array(
  Type.String({
    format: "uri",
    placeholder: "图片URL",
  }),
  {
    code: "config-files",
    title: "轮播图片地址",
    default: [],
    description: "轮播图图片地址数组",
  },
);

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

const link = Type.String({
  code: "config-input",
  title: "跳转链接",
  default: "",
  placeholder: "点击轮播图跳转的链接地址",
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
    title: "图片适应方式",
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

const alt = Type.String({
  code: "config-input",
  title: "替代文本",
  default: "轮播图",
  placeholder: "图片无法显示时的替代文本",
});

const autoplay = Type.Boolean({
  code: "config-switch",
  title: "自动播放",
  default: true,
  description: "是否自动播放轮播",
});

const dotPosition = Type.Union(
  [
    Type.Literal("top"),
    Type.Literal("bottom"),
    Type.Literal("left"),
    Type.Literal("right"),
  ],
  {
    code: "config-select",
    title: "指示器位置",
    default: "bottom",
    options: [
      { label: "顶部", value: "top" },
      { label: "底部", value: "bottom" },
      { label: "左侧", value: "left" },
      { label: "右侧", value: "right" },
    ],
  },
);

const schema = Type.Object({
  display: getSchema(display),
  src: getSchema(src),
  alt: getSchema(alt),
  width: getSchema(width),
  height: getSchema(height),
  objectFit: getSchema(objectFit),
  link: getSchema(link),
  autoplay: getSchema(autoplay),
  dotPosition: getSchema(dotPosition),
});

export const SliderSchema = schema;
export type SliderSchemaType = Static<typeof schema>;
