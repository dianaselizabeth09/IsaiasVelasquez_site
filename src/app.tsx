import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { SocialFab, ScrollToTop } from "./components/common";
import {
  HomePage,
  ServicesPage,
  ServiceDetailPage,
  AboutPage,
  ContactPage,
  FAQPage,
  GalleryPage,
  PrivacyPage,
  TermsPage,
  CookiesPage,
  AccessibilityPage,
  SitemapPage,
} from "./pages";

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceKey" element={<ServiceDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
      </Routes>
      <SocialFab />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/IsaiasVelasquez_site">
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
