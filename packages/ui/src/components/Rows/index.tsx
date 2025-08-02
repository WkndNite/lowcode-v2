import Div from "../Div";
import type { RowsProps } from "./types";

const ZmwRows: React.FC<RowsProps> = ({
  rowCount = 5,
  gap = "16px",
  rowHeight = "auto",
  display = true,
  style,
  children = [1, 2, 3, 4, 5],
}) => {
  if (!display) return null;

  // 创建行数组
  const rows = Array.from({ length: rowCount }, (_, index) => index);

  const containerStyle = {
    ...style,
    display: "flex",
    flexDirection: "column" as const,
    gap,
  };

  const rowStyle = {
    flex: rowHeight === "auto" ? "1" : "0 0 auto",
    height: rowHeight === "auto" ? "auto" : rowHeight,
  };

  return (
    <div style={containerStyle} className="zmw-rows" data-testid="zmw-rows">
      {rows.map((rowIndex) => (
        <Div key={rowIndex} style={rowStyle}>
          {children[rowIndex]}
        </Div>
      ))}
    </div>
  );
};

export default ZmwRows;
