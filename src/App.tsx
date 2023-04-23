import { RouterProvider, ThemeProvider } from "./providers";

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}
