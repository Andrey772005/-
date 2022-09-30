import {StrictMode} from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/default";

const rootElement = document.getElementById("root")
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement)
