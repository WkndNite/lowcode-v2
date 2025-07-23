import type { CSSProperties } from "react";

export interface BlankProps {
  /** 留白尺寸 */
  size?: string | number;
  /** 留白方向 */
  direction?: "horizontal" | "vertical";
  /** 是否显示组件 */
  display?: boolean;
  /** 自定义样式 */
  style?: CSSProperties;
}
