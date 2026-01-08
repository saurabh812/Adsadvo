import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

// Amazon pages
import AmazonIndia from "./pages/AmazonIndia";
import AmazonInternational from "./pages/AmazonInternational";

// Service pages
import Flipkart from "./pages/Flipkart";
import Meesho from "./pages/meesho";
import EcomWebsite from "./pages/ecom-website";


import "./styles/global.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* Amazon */}
        <Route path="/amazon-india" element={<AmazonIndia />} />
        <Route path="/amazon-international" element={<AmazonInternational />} />

        {/* Services */}
        <Route path="/flipkart" element={<Flipkart />} />
        <Route path="/meesho" element={<Meesho />} />
        <Route path="/ecom-website" element={<EcomWebsite />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
