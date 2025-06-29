import {
  BgColorsOutlined,
  BorderOutlined,
  EditOutlined,
  FundOutlined,
  InsertRowAboveOutlined,
  InsertRowLeftOutlined,
  PictureOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";
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
}

export const BaseMaterials: MaterialKeys[] = [
  {
    id: "",
    name: "文本",
    render: "text",
    icon: <EditOutlined />,
    config: {},
  },
  {
    id: "",
    name: "图片",
    render: "image",
    icon: <PictureOutlined />,
    config: {},
  },
  {
    id: "",
    name: "视频",
    render: "video",
    icon: <VideoCameraOutlined />,
    config: {},
  },
  {
    id: "",
    name: "幻灯片",
    render: "slider",
    icon: <FundOutlined />,
    config: {},
  },
  {
    id: "",
    name: "留白",
    render: "blank",
    icon: <BorderOutlined />,
    config: {},
  },
];

export const AdvancedMaterials: MaterialKeys[] = [
  {
    id: "",
    name: "多行",
    render: "lines",
    icon: <InsertRowAboveOutlined />,
    nestable: true,
    children: [],
    config: {},
  },
  {
    id: "",
    name: "多列",
    render: "columns",
    icon: <InsertRowLeftOutlined />,
    nestable: true,
    children: [],
    config: {},
  },
  {
    id: "",
    name: "画布",
    render: "canvas",
    icon: <BgColorsOutlined />,
    nestable: true,
    children: [],
    config: {},
  },
];

export const CanvasMaterials: MaterialKeys[] = [
  {
    id: "",
    name: "图片",
    render: "image",
    icon: <PictureOutlined />,
    config: {},
  },
  {
    id: "",
    name: "文本",
    render: "text",
    icon: <EditOutlined />,
    config: {},
  },
];
