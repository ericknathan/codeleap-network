import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

interface QueryClientProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
}
