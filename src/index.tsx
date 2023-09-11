import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import { App } from "App";
import { Layout } from "Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
