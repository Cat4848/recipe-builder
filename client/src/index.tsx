import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ToastContainer } from "react-toastify";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <App />
    <ToastContainer theme="dark" />
  </>
);
