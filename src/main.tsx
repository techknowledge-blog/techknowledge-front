import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "./context/ThemeProvider";
import { App } from "./App";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="dark:bg-[#0f172a] dark:text-white bg-[#fbfbf9] text-black">
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
