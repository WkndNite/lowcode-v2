import type { CSSProperties, ReactNode } from "react";

export interface RowsProps {
  /** 行数 */
  rowCount?: number;
  /** 行间距 */
  gap?: string | number;
  /** 行高度 */
  rowHeight?: string;
  /** 是否显示组件 */
  display?: boolean;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode[];
}
