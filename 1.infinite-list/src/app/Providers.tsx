"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FunctionComponent, useState } from "react";

export const Providers: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queryClient] = useState(new QueryClient({ defaultOptions: {} }));

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};
