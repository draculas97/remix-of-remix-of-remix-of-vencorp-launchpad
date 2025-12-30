import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PragatiPage from "./pages/PragatiPage";
import StelloPage from "./pages/StelloPage";
import EdifaiPage from "./pages/EdifaiPage";
import InterllexiaPage from "./pages/InterllexiaPage";
import GinePage from "./pages/GinePage";
import JobPortalPage from "./pages/JobPortalPage";
import TezzaractPage from "./pages/TezzaractPage";
import AuthPage from "./pages/AuthPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pragati" element={<PragatiPage />} />
          <Route path="/stello" element={<StelloPage />} />
          <Route path="/edifai" element={<EdifaiPage />} />
          <Route path="/interllexia" element={<InterllexiaPage />} />
          <Route path="/gine" element={<GinePage />} />
          <Route path="/job-portal" element={<JobPortalPage />} />
          <Route path="/tezzaract" element={<TezzaractPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
