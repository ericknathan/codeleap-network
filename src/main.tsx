import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

setupDayjs();

import { App } from "./App.tsx";
import { setupDayjs } from "./utils/date.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
