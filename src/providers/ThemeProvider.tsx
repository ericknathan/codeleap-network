import { ReactNode } from "react";
import { ThemeProvider as SyledThemeProvider } from "styled-components";

import { defaultTheme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";

interface ThemeProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProps) {
  return (
    <SyledThemeProvider theme={defaultTheme}>
      {children}
      <GlobalStyles />
    </SyledThemeProvider>
  );
}
