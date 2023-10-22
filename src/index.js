import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBgColor: "#ced4da",
    textColor: "#050505",
    contactBtn: "#2982ff",
    deleteBtn: "#ff2929",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
