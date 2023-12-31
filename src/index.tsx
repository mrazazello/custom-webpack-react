import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "app/providers/errorBoundary";
import { StoreProvider } from "app/providers/storeProvider";
import { ThemeProvaider } from "app/providers/themeProvider";

import App from "./app/App";

import "app/styles/index.scss";
import "shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvaider>
          <App />
        </ThemeProvaider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
