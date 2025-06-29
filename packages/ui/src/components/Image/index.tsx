import type { ImageProps } from "./types";

const Index: React.FC<ImageProps> = ({
  src,
  alt = "",
  width = "100%",
  height = "auto",
  rounded = false,
  border = false,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        height,
        borderRadius: rounded ? "8px" : 0,
        border: border ? "1px solid #ccc" : "none",
        objectFit: "cover",
      }}
    />
  );
};

export default Index;
