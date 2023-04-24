import {
  QueryClientProvider,
  ReduxProvider,
  RouterProvider,
  ThemeProvider,
} from "@/providers";

export function App() {
  return (
    <ReduxProvider>
      <QueryClientProvider>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
