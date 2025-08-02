import { GroupOutlined, MacCommandOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Col, Collapse, type CollapseProps, Menu, Row } from "antd";
import { useMemo, useState } from "react";
import "./index.less";
import DraggableItem from "@/components/common/DraggableItem";
import { AdvancedMaterials, BaseMaterials } from "@/configs/materials";

type MaterialCategoryType = {
  key: string;
  title: string;
  icon: React.ReactNode;
};

const materialCategory: MaterialCategoryType[] = [
  { key: "components", title: "组件", icon: <MacCommandOutlined /> },
  { key: "kit", title: "套件", icon: <GroupOutlined /> },
];

const materialMap: Record<string, CollapseProps["items"]> = {
  components: [
    {
      key: "base",
      label: "基础组件",
      children: (
        <Row gutter={[16, 16]}>
          {BaseMaterials.map((material) => (
            <Col span={8} key={material.name}>
              <DraggableItem type={material.dragType} className="material-item">
                {material.icon}
                <span>{material.name}</span>
              </DraggableItem>
            </Col>
          ))}
        </Row>
      ),
    },
    {
      key: "advanced",
      label: "高级组件",
      children: (
        <Row gutter={[16, 16]}>
          {AdvancedMaterials.map((material) => (
            <Col span={8} key={material.name}>
              <DraggableItem type={material.dragType} className="material-item">
                {material.icon}
                <span>{material.name}</span>
              </DraggableItem>
            </Col>
          ))}
        </Row>
      ),
    },
  ],
  kit: [
    {
      key: "kit-1",
      label: "业务套件",
      children: (
        <Row gutter={[16, 16]}>
          {BaseMaterials.map((material) => (
            <Col span={8} key={material.name}>
              <DraggableItem type={material.dragType} className="material-item">
                {material.icon}
                <span>{material.name}</span>
              </DraggableItem>
            </Col>
          ))}
        </Row>
      ),
    },
  ],
};

const EditorMaterials = () => {
  const [activeCategory, setActiveCategory] = useState("components");

  const onMenuClick: MenuProps["onClick"] = (e) => {
    setActiveCategory(e.key);
  };

  const activeKey = useMemo(() => {
    return materialMap[activeCategory]?.map((item) => item.key);
  }, [activeCategory]);

  return (
    <div className="editor-materials">
      <div className="editor-materials-left">
        <Menu
          mode="inline"
          selectedKeys={[activeCategory]}
          onClick={onMenuClick}
          items={materialCategory.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.title,
          }))}
        />
      </div>

      <div className="editor-materials-right">
        <Collapse
          items={materialMap[activeCategory]}
          ghost
          activeKey={activeKey as string[]}
        />
      </div>
    </div>
  );
};

export default EditorMaterials;
