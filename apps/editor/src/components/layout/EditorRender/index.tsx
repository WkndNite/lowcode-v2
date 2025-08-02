/** biome-ignore-all lint/a11y/useKeyWithClickEvents: 1 */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: 2*/
// @ts-nocheck
import { Empty } from "antd";
import { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "@/configs/dnd/ItemTypes";
import "./index.less";
import { useEditorStore } from "@/store/editorStore";

const EditRender = () => {
  const ref = useRef<HTMLDivElement>(null);
  const components = useEditorStore((state) => state.components);
  const addComponent = useEditorStore((state) => state.addComponent);
  const selectComponent = useEditorStore((state) => state.selectComponent);
  const selectedId = useEditorStore((state) => state.selectedId);
  const deviceType = useEditorStore((state) => state.deviceType);

  console.group("渲染区组件列表");
  console.log("components", components);
  console.log("selectedId", selectedId);
  console.log("addComponent", addComponent);
  console.log("selectComponent", selectComponent);
  console.groupEnd();

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: Object.values(ItemTypes),
    drop: (item, monitor) => {
      console.log("Dropped item:", item);
      console.log("monitor", monitor);
      addComponent({
        id: Math.random().toString(36).substr(2, 9), // 生成一个随机ID
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
            <div
              key={comp.id}
              onClick={() => selectComponent(comp.id)}
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
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EditRender;
