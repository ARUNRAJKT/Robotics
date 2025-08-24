import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductsServices from "./pages/ProductsServices";
import CaseStudies from "./pages/CaseStudies";
import Research from "./pages/Research";
import Blog from "./pages/Blog";
import ContactModal from "./pages/Contact";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <Router>
      <Navbar onContactClick={openContactModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/research" element={<Research />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </Router>
  );
}

export default App;