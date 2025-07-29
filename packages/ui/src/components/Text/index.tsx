import { DEFAULT_TEXT } from "@/configs";
import type { TextProps } from "./types";

const ZmwText: React.FC<TextProps> = ({
  content = DEFAULT_TEXT,
  fontSize = "16px",
  color = "#333333",
  textAlign = "left",
  display = "block",
}) => {
  return (
    <div
      style={{
        fontSize,
        color,
        textAlign,
        display,
        wordBreak: "break-word",
      }}
      className="zmw-text"
    >
      {content}
    </div>
  );
};

export default ZmwText;
