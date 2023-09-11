import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import { App } from "App";
import { Layout } from "Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <App />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
