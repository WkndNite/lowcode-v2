import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes, type ItemTypesKeys } from "@/configs/dnd/ItemTypes";
import { AllMaterials } from "@/configs/materials";
import "./index.less";
import { Registry } from "@/configs/registry";

interface DraggableItemProps {
  children: ReactNode;
  type: ItemTypesKeys;
  className?: string;
}

const DraggableItem = ({ children, type, className }: DraggableItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes[type],
    item: {
      type,
      children,
      render: AllMaterials.find((m) => m.dragType === type)?.render,
      component: Registry[type],
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (ref.current) {
      drag(ref.current);
    }
  }, [drag]);

  return (
    <div
      ref={ref}
      className={`draggable-item ${className || ""}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
