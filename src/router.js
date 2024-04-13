import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/chats", element: <ChatPage /> },
]);

export default routerConfig;
