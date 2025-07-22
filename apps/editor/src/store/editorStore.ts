import { create } from "zustand";

// 渲染区的单个组件
type ComponentItem = {
  id: string;
  type: string;
  name: string;
  component: any;
  props?: Record<string, any>;
};

type EditorState = {
  /**
   * 渲染区的组件列表
   */
  components: ComponentItem[];
  /**
   * 当前选中的组件ID
   */
  selectedId: string | null;
  /**
   * 添加一个组件到渲染区
   * @param comp 组件对象
   */
  addComponent: (comp: ComponentItem) => void;
  /**
   * 选中组件
   * @param id 组件ID
   */
  selectComponent: (id: string | null) => void;
  /**
   * 更新组件的属性
   * @param id 组件ID
   * @param newProps 新的属性对象
   */
  updateComponentProps: (id: string, newProps: Record<string, any>) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  components: [],
  selectedId: null,

  addComponent: (comp) =>
    set((state) => ({
      components: [...state.components, comp],
    })),

  selectComponent: (id) => set({ selectedId: id }),

  updateComponentProps: (id, newProps) =>
    set((state) => ({
      components: state.components.map((comp) =>
        comp.id === id
          ? { ...comp, props: { ...comp.props, ...newProps } }
          : comp,
      ),
    })),
}));
