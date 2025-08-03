import { useEditorStore } from "@/store/editorStore";
import "./index.less";
import { CloseOutlined, SettingOutlined } from "@ant-design/icons";
import { BlankSchema } from "@lowcode/ui/src/components/Blank/schema";
import { FloatButton, Typography } from "antd";
import { useEffect } from "react";
import { materialSchemas } from "@/configs/materials/schemas";

const EditorConfig = () => {
  const { isConfigPanelVisible, toggleConfigPanel, selectedId } =
    useEditorStore();

  useEffect(() => {
    console.log("💺", selectedId);
  }, [selectedId]);

  return (
    <>
      <FloatButton
        shape="square"
        type="primary"
        icon={isConfigPanelVisible ? <CloseOutlined /> : <SettingOutlined />}
        onClick={() => {
          toggleConfigPanel();
          console.log("isConfigPanelVisible", isConfigPanelVisible);
        }}
        className="config-panel-toggle"
      />
      {/* 原有配置内容 */}
      <div
        className="editor-config"
        style={{
          width: isConfigPanelVisible ? "var(--editor-config-width)" : 0,
        }}
      >
        <Typography>
          <Typography.Title
            level={4}
            style={{
              marginLeft: 20,
            }}
          >
            组件配置
          </Typography.Title>
        </Typography>
        {}
      </div>
    </>
  );
};

export default EditorConfig;
