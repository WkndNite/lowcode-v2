import { Empty } from "antd";
import { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "@/configs/dnd/ItemTypes";
import "./index.less";

const EditRender = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: Object.values(ItemTypes),
    drop: (item, monitor) => {
      console.log("Dropped item:", item);
      console.log("monitor", monitor);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // 注册 drop 到 DOM ref 上
  useEffect(() => {
    if (ref.current) {
      drop(ref.current);
    }
  }, [drop]);

  return (
    <div
      ref={ref}
      className="editor-render"
      style={{
        backgroundColor: canDrop ? "#e6f7ff" : "#fff",
        transition: "background-color 0.2s",
      }}
    >
      {canDrop ? isOver ? "松开放置" : "拖拽到这里" : <Empty />}
    </div>
  );
};

export default EditRender;
