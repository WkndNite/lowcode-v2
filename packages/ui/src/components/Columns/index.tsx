import type { ColumnsProps } from "./types";

const ZmwColumns: React.FC<ColumnsProps> = ({
  columnCount = 5,
  gap = "16px",
  columnWidth = "auto",
  display = true,
  style,
  children = [1, 2, 3, 4, 5],
}) => {
  if (!display) return null;

  // 创建列数组
  const columns = Array.from({ length: columnCount }, (_, index) => index);

  const containerStyle = {
    ...style,
    display: "flex",
    flexDirection: "row" as const,
    gap,
  };

  const columnStyle = {
    flex: columnWidth === "auto" ? "1" : "0 0 auto",
    width: columnWidth === "auto" ? "auto" : columnWidth,
  };

  return (
    <div
      style={containerStyle}
      className="zmw-columns"
      data-testid="zmw-columns"
    >
      {columns.map((columnIndex) => (
        <div key={columnIndex} style={columnStyle}>
          {children[columnIndex]}
        </div>
      ))}
    </div>
  );
};

export default ZmwColumns;
