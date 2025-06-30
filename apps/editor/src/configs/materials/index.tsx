import {
  BgColorsOutlined,
  EditOutlined,
  EllipsisOutlined,
  FundOutlined,
  InsertRowAboveOutlined,
  InsertRowLeftOutlined,
  PictureOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";
import { ItemTypesKeys } from "../dnd/ItemTypes";
import type { MaterialSchemasKeys, MaterialSchemasType } from "./schemas";

export interface MaterialKeys {
  /**
   * 物料的唯一标识符
   */
  id: string;
  /**
   * 物料区显示名称
   */
  name: string;
  /**
   * 物料区显示图标
   */
  icon: ReactNode;
  /**
   * 标识该物料是否可以嵌套
   */
  nestable?: boolean;
  /**
   * 物料嵌套的子物料
   */
  children?: MaterialKeys[][];
  /**
   *  物料的 schema 配置
   */

  // biome-ignore lint/complexity/noBannedTypes: temporary for later modification
  config: MaterialSchemasType[MaterialSchemasKeys] | Object;
  /**
   * 物料渲染时对应的组件名称
   */
  render: string;
  /**
   * 物料拖拽时的类型标识
   */
  dragType: ItemTypesKeys;
}

export const BaseMaterials: MaterialKeys[] = [
  {
    id: "",
    name: "文本",
    render: "text",
    icon: <EditOutlined />,
    config: {},
    dragType: ItemTypesKeys.TEXT,
  },
  {
    id: "",
    name: "图片",
    render: "image",
    icon: <PictureOutlined />,
    config: {},
    dragType: ItemTypesKeys.IMAGE,
  },
  {
    id: "",
    name: "视频",
    render: "video",
    icon: <VideoCameraOutlined />,
    config: {},
    dragType: ItemTypesKeys.VIDEO,
  },
  {
    id: "",
    name: "幻灯片",
    render: "slider",
    icon: <FundOutlined />,
    config: {},
    dragType: ItemTypesKeys.SLIDER,
  },
  {
    id: "",
    name: "留白",
    render: "blank",
    icon: <EllipsisOutlined />,
    config: {},
    dragType: ItemTypesKeys.BLANK,
  },
];

export const AdvancedMaterials: MaterialKeys[] = [
  {
    id: "",
    name: "多行",
    render: "rows",
    icon: <InsertRowAboveOutlined />,
    nestable: true,
    children: [],
    config: {},
    dragType: ItemTypesKeys.ROWS,
  },
  {
    id: "",
    name: "多列",
    render: "columns",
    icon: <InsertRowLeftOutlined />,
    nestable: true,
    children: [],
    config: {},
    dragType: ItemTypesKeys.COLUMNS,
  },
  {
    id: "",
    name: "画布",
    render: "canvas",
    icon: <BgColorsOutlined />,
    nestable: true,
    children: [],
    config: {},
    dragType: ItemTypesKeys.CANVAS,
  },
];

export const CanvasMaterials: MaterialKeys[] = [
  {
    id: "",
    name: "图片",
    render: "image",
    icon: <PictureOutlined />,
    config: {},
    dragType: ItemTypesKeys.IMAGE,
  },
  {
    id: "",
    name: "文本",
    render: "text",
    icon: <EditOutlined />,
    config: {},
    dragType: ItemTypesKeys.TEXT,
  },
];

export const AllMaterials: MaterialKeys[] = Array.from(
  new Map(
    [...BaseMaterials, ...AdvancedMaterials, ...CanvasMaterials].map((m) => [
      m.render,
      m,
    ]),
  ).values(),
);
