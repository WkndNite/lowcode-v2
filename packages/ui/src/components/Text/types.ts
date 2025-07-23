export interface TextProps {
  /** 文本内容 */
  content?: string;
  /** 字体大小 */
  fontSize?: string;
  /** 字体颜色 */
  color?: string;
  /** 对齐方式 */
  textAlign?: "left" | "center" | "right";
  // todo 控制设备
  /** 显示状态 */
  display?: "block" | "none";
}
