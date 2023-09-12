import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import { App } from "App";
import { Layout } from "components/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import {
  ButtonLink,
  ErrorMessage,
  LandingLinkWrapper,
} from "components/ui.styles";
import "styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LandingLinkWrapper>
        <ButtonLink as="a" href="/ksiegowi">
          Poznaj księgowych
        </ButtonLink>
      </LandingLinkWrapper>
    ),
  },
  {
    path: "/ksiegowi",
    element: <App />,
  },
  {
    path: "*",
    element: (
      <ErrorMessage>
        Nice try, <a href="/ksiegowi">now please go back</a>
      </ErrorMessage>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeProvider>
      </JotaiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
