import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./global.css";
import { ThemeProvider } from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="dark:bg-[#0f172a] dark:text-white bg-[#fbfbf9] text-black">
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
