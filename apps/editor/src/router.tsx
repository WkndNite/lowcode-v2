import { createBrowserRouter } from "react-router-dom";
import Editor from "./pages/Editor";
import List from "./pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
]);

export default router;
