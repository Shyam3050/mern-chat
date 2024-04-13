import "./App.css";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router";

function App() {
  return (
    <div className="app">
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
