import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy-loaded pages (performance optimized)
const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Dropshipping = lazy(() => import("./pages/Dropshipping"));

// Amazon pages
const AmazonIndia = lazy(() => import("./pages/AmazonIndia"));
const AmazonInternational = lazy(() => import("./pages/AmazonInternational"));

// Service pages
const Flipkart = lazy(() => import("./pages/Flipkart"));
const Meesho = lazy(() => import("./pages/meesho"));
const EcomWebsite = lazy(() => import("./pages/ecom-website"));

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />

      {/* Suspense wrapper for lazy loading */}
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0b1c2d",
              color: "#fff",
              fontSize: "18px",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dropshipping" element={<Dropshipping />} />

          {/* Amazon */}
          <Route path="/amazon-india" element={<AmazonIndia />} />
          <Route
            path="/amazon-international"
            element={<AmazonInternational />}
          />

          {/* Services */}
          <Route path="/flipkart" element={<Flipkart />} />
          <Route path="/meesho" element={<Meesho />} />
          <Route path="/ecom-website" element={<EcomWebsite />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
