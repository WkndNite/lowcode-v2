import type { CSSProperties, ReactNode } from "react";

export interface ColumnsProps {
  /** 列数 */
  columnCount?: number;
  /** 列间距 */
  gap?: string | number;
  /** 列宽度 */
  columnWidth?: string;
  /** 是否显示组件 */
  display?: boolean;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode[];
}
