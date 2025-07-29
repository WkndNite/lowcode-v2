import { Carousel } from "antd";
import { DEFAULT_FALLBACK_IMAGE, DEFAULT_SLIDER_IMAGES } from "@/configs";
import type { SliderProps } from "./types";

const ZmwSlider: React.FC<SliderProps> = ({
  src = DEFAULT_SLIDER_IMAGES,
  width = "100%",
  height = "300px",
  link,
  display = true,
  fallback = DEFAULT_FALLBACK_IMAGE,
  objectFit = "cover",
  alt = "轮播图",
  style,
  nativeProps,
}) => {
  if (!display) return null;

  const containerStyle = {
    width,
    height,
    borderRadius: 8,
    overflow: "hidden",
    ...style,
  };

  const sliderContent = (
    <Carousel
      data-testid="zmw-slider"
      className="zmw-slider"
      autoplay
      arrows
      infinite
      style={{ width: "100%", height: "100%" }}
      {...nativeProps}
    >
      {src.map((item, index) => (
        <div
          className="zmw-slider-item-wrapper"
          key={`slider-${item}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%", // 新增宽度约束
            height: "100%", // 新增高度约束
          }}
        >
          <img
            src={item}
            alt={`${alt}-${index}`}
            style={{
              objectFit,
              width: "200px", // 改为百分比宽度
              height: "200px", // 改为百分比高度
              display: "block", // 添加块级显示
              margin: "auto", // 添加自动外边距
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallback;
            }}
          />
        </div>
      ))}
    </Carousel>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={containerStyle}
    >
      {sliderContent}
    </a>
  ) : (
    <div style={containerStyle}>{sliderContent}</div>
  );
};

export default ZmwSlider;
