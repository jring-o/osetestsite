// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 👇 Import BrowserRouter (already there, just confirming)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Define the basename based on your repository name
const repoName = 'osetestsite';
const basename = `/${repoName}`; // Will be "/osetestsite"

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* 👇 Add the basename prop to BrowserRouter 👇 */}
      <BrowserRouter basename={basename}>
        <Routes>
          {/* Your index route is now effectively /osetestsite/ */}
          <Route path="/" element={<Index />} />
          {/* If you had an about page, its path would be /osetestsite/about */}
          {/* <Route path="/about" element={<AboutPage />} /> */}

          {/* Catch-all remains the same */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;