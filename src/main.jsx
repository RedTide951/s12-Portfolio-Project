import { createRoot } from "react-dom/client";
import { AppProvider } from "./contexts/AppContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
