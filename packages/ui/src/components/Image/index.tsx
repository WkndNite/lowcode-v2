import { Image as AntImage } from "antd";
import { fallback as defaultFallback } from "./fallback";
import type { ImageProps } from "./types";

const ZmwImage: React.FC<ImageProps> = ({ 
  src, 
  width = "100%", 
  height = "300px", 
  link, 
  display = true, 
  fallback = defaultFallback,
  objectFit = "cover", 
  alt = "", 
  style, 
  nativeProps 
}) => {
  
  if (!display || !src) return null;

  // 图片容器样式合并
  const containerStyle = { 
    width, 
    height, 
    borderRadius: 8, 
    overflow: "hidden",
    ...style
  };

  // 图片内容组件
  const imageContent = (
    <AntImage
      src={src}
      alt={alt}
      preview={false}
      fallback={fallback}
      style={{ objectFit, width: "100%", height: "100%" }}
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
    >
      {imageContent}
    </a>
  ) : (
    <div style={containerStyle}>
      {imageContent}
    </div>
  );
};

export default ZmwImage;
