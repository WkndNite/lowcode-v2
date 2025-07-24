import { Image as AntImage } from "antd";
import { DEFAULT_FALLBACK_IMAGE, DEFAULT_IMAGE } from "@/configs";
import type { ImageProps } from "./types";

const ZmwImage: React.FC<ImageProps> = ({
  src = DEFAULT_IMAGE,
  width = "20px",
  height = "20px",
  link,
  display = true,
  fallback = DEFAULT_FALLBACK_IMAGE,
  objectFit = "cover",
  alt = "默认兜底",
  style,
  nativeProps,
}) => {
  if (!display || !src) return null;

  // 图片容器样式合并
  const containerStyle = {
    width,
    height,
    borderRadius: 8,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };

  // 图片内容组件
  const imageContent = (
    <AntImage
      src={src}
      alt={alt}
      preview={false}
      fallback={fallback}
      style={{ objectFit, width, height }}
      {...nativeProps}
    />
  );
  // 链接包装逻辑
  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={containerStyle}
      className="zmw-image"
    >
      {imageContent}
    </a>
  ) : (
    <div style={containerStyle} className="zmw-image">
      {imageContent}
    </div>
  );
};

export default ZmwImage;
