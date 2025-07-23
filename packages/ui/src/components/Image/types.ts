import type { ImageProps as AntImageProps } from "antd";
import type { CSSProperties } from "react";

export interface ImageProps {
  /** 图片地址 */
  src: string;
  /** 显示宽度 */
  width?: string | number;
  /** 显示高度 */
  height?: string | number;
  /** 点击跳转链接 */
  link?: string;
  /** 是否显示 */
  display?: boolean;
  /** 图片加载失败时的占位内容 */
  fallback?: string;
  /** 图片预览功能开关 */
  /** 图片适应容器的方式 */
  objectFit?: CSSProperties["objectFit"];
  /** 图片alt属性 */
  alt?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** Ant Design Image组件原生属性 */
  nativeProps?: Omit<AntImageProps, "src" | "width" | "height" | "fallback">;
}
