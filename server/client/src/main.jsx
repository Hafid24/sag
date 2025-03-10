import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./index.jsx";
import { BooksProvider } from "./context/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BooksProvider>
        <App />
      </BooksProvider>
    </QueryClientProvider>
  </StrictMode>
);
