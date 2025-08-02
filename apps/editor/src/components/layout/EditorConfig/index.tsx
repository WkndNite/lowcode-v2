import { useEditorStore } from "@/store/editorStore";
import "./index.less";
import { FloatButton } from "antd";
import { CloseOutlined, SettingOutlined } from "@ant-design/icons";

const EditorConfig = () => {
  const { isConfigPanelVisible, toggleConfigPanel } = useEditorStore();

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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
      </div>
    </>
  );
};

export default EditorConfig;
