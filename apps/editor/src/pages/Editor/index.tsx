import EditorMaterials from "@/components/layout/EditorMaterials";
import EditHeader from "@/components/layout/EditorNavigator";
import EditRender from "@/components/layout/EditorRender";
import "./index.less";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EditorConfig from "@/components/layout/EditorConfig";

const Editor = () => {
  return (
    <div className="editor-page">
      <DndProvider backend={HTML5Backend}>
        <header>
          <EditHeader />
        </header>
        <main>
          <EditorMaterials />
          <EditRender />
          <EditorConfig />
        </main>
      </DndProvider>
    </div>
  );
};

export default Editor;
