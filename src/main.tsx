import { createRoot } from "react-dom/client";
import App from "./App"; // It's conventional to omit the extension for .tsx/.jsx files
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(<App />);
