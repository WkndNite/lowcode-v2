import type { CSSProperties, ReactNode } from "react";
import type { CarouselProps } from "antd";

export interface SliderProps extends CarouselProps {
  /** 轮播图图片地址数组 */
  src?: string[];
  /** 组件宽度 */
  width?: string | number;
  /** 组件高度 */
  height?: string | number;
  /** 点击跳转链接 */
  link?: string;
  /** 是否显示组件 */
  display?: boolean;
  /** 加载失败兜底图 */
  fallback?: string;
  /** 图片适应方式 */
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  /** 图片alt属性 */
  alt?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 原生属性 */
  nativeProps?: Omit<CarouselProps, "style">;
  /** 自定义内容 */
  children?: ReactNode;
}