export interface VideoProps {
  /** 视频地址 */
  src?: string;
  /** 宽度 */
  width?: string;
  /** 高度 */
  height?: string;
  /** 是否显示控制栏 */
  controls?: boolean;
  /** 是否自动播放 */
  autoplay?: boolean;
  /** 视频填充模式 */
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  /** 显示状态 */
  display?: "block" | "none";
}
