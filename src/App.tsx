import {
  QueryClientProvider,
  RouterProvider,
  ThemeProvider,
} from "@/providers";

export function App() {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
