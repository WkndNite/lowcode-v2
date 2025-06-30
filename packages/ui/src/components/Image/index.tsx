import { Image } from "antd";
import type { ImageProps } from "./types";

const ZmwImage: React.FC<ImageProps> = ({
  src,
  width = "100%",
  height = "300px",
  link,
  display = true,
}) => {
  if (!display) return null;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt=""
        style={{
          width,
          height,
          borderRadius: 8,
          objectFit: "cover",
          display: "block",
        }}
      />
    </a>
  );
};

export default ZmwImage;
