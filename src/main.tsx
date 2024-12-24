import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const client = new QueryClient({});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </QueryClientProvider>
);
