import {
  CloudUploadOutlined,
  EyeOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Button, Divider, Select } from "antd";
import "./index.less";
import { useEditorStore } from "@/store/editorStore";

const EditorNavigator = () => {
  const { setDeviceType } = useEditorStore();
  const handleChange = (value: "desktop" | "mobile") => {
    setDeviceType(value);
  };
  return (
    <div className="editor-navigator">
      <div className="editor-navigator-left">
        <Button type="text" icon={<LeftOutlined />} className="back-button">
          返回
        </Button>
        <Divider type="vertical" />
        <Select
          defaultValue="desktop"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "desktop", label: "桌面端" },
            { value: "mobile", label: "移动端" },
          ]}
        />
      </div>
      <div className="editor-navigator-right">
        <Button type="default" icon={<EyeOutlined />}>
          预览
        </Button>
        <Button type="primary" icon={<CloudUploadOutlined />}>
          发布
        </Button>
      </div>
    </div>
  );
};

export default EditorNavigator;
