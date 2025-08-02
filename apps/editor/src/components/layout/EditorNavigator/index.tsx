import {
  CloudUploadOutlined,
  EyeOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Button, Divider, Select } from "antd";
import "./index.less";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const EditorNavigator = () => {
  return (
    <div className="editor-navigator">
      <div className="editor-navigator-left">
        <Button type="text" icon={<LeftOutlined />} className="back-button">
          返回
        </Button>
        <Divider type="vertical" />
        <Select
          defaultValue="lucy"
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
