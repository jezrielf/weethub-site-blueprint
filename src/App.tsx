
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Assessoria from "./pages/Assessoria";
import LojaVirtual from "./pages/LojaVirtual";
import SobreNos from "./pages/SobreNos";
import Blog from "./pages/Blog";
import FaleConosco from "./pages/FaleConosco";
import TrabalheConosco from "./pages/TrabalheConosco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessoria" element={<Assessoria />} />
          <Route path="/loja-virtual" element={<LojaVirtual />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
