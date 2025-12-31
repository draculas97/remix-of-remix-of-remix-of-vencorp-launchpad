import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
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
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import PressPage from "./pages/PressPage";
import BlogPage from "./pages/BlogPage";
import DocumentationPage from "./pages/DocumentationPage";
import ApiReferencePage from "./pages/ApiReferencePage";
import StatusPage from "./pages/StatusPage";
import SupportPage from "./pages/SupportPage";
import BuiltByStaciaPage from "./pages/BuiltByStaciaPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/api-reference" element={<ApiReferencePage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/built-by-stacia" element={<BuiltByStaciaPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
