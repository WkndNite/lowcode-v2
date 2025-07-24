import { useState } from "react";
import { DEFAULT_FALLBACK_IMAGE } from "@/configs";
import type { VideoProps } from "./types";

const ZmwVideo: React.FC<VideoProps> = ({
  src = "",
  width = "100%",
  height = "100px",
  controls = true,
  autoplay = false,
  display = "block",
  objectFit = "contain",
}) => {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  if (isError || !src) {
    return (
      <div
        style={{
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          objectFit: "contain",
        }}
      >
        <img
          src={DEFAULT_FALLBACK_IMAGE}
          alt="视频加载失败"
          width="100px"
          height="100px"
        />
      </div>
    );
  }

  return (
    <div style={{ display, width }} className="zmw-video">
      <video
        src={src}
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoplay}
        muted={autoplay}
        onError={handleError}
        style={{
          maxWidth: "100%",
          objectFit,
        }}
      />
    </div>
  );
};

export default ZmwVideo;
