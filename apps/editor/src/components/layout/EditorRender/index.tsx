//@ts-nocheck
import { Empty } from "antd";
import { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "@/configs/dnd/ItemTypes";
import "./index.less";
import { v4 as uuidv4 } from "uuid";
import { useEditorStore } from "@/store/editorStore";

const EditRender = () => {
  const ref = useRef<HTMLDivElement>(null);
  const components = useEditorStore((state) => state.components);
  const addComponent = useEditorStore((state) => state.addComponent);
  const selectComponent = useEditorStore((state) => state.selectComponent);
  const selectedId = useEditorStore((state) => state.selectedId);
  const deviceType = useEditorStore((state) => state.deviceType);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: Object.values(ItemTypes),
    drop: (item, monitor) => {
      console.log("Dropped item:", item);
      console.log("monitor", monitor);
      addComponent({
        id: uuidv4(),
        type: item.type,
        name: item.render,
        component: item.component,
        props: {},
      });
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
      className={`editor-render `}
      style={{
        padding: 20,
        background: deviceType === "mobile" ? "#f5f5f5" : "#fff",
      }}
    >
      <div
        ref={ref}
        className={`${
          deviceType === "mobile" ? "data-type-mobile" : "data-type-desktop"
        }`}
        style={{
          width: deviceType === "mobile" ? "60%" : "100%",
          height: "100%",
          padding: 12,
          margin: "auto",
          backgroundColor: isOver ? "#bae7ff" : canDrop ? "#e6f7ff" : "#fff",
          transition: "background-color 0.2s",
        }}
      >
        {components.length === 0 ? (
          <Empty />
        ) : (
          components.map((comp) => (
            <main
              key={comp.id}
              onClick={() => selectComponent(comp.id)}
              onKeyUp={(e) => console.log("1", e.key)}
              style={{
                border:
                  comp.id === selectedId
                    ? "1px solid #1890ff"
                    : "1px dashed #ccc",
                padding: 8,
                marginBottom: 8,
                cursor: "pointer",
              }}
            >
              {/* 渲染comp.component */}
              <comp.component
                {...comp.props}
                style={{
                  width: "100%",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              />
            </main>
          ))
        )}
      </div>
    </div>
  );
};

export default EditRender;
