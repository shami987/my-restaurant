import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import BookTableSection from "./components/BookTableSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";


export default function App() {
  return (
    <Router>

    {/* Navbar always visible */}
    <Navbar />

    {/* Page content changes */}
    <Routes>
     <Route path="/" element={  <>
        <Hero />
        <MenuSection />
        <AboutSection />
        <BookTableSection />
        <TestimonialSection />
      </>} />
      
     <Route path="/menu" element={<MenuSection/>} />
     <Route path="/about" element={<AboutSection/>} />
     <Route path="/book-table" element={<BookTableSection/>} />
    </Routes>
      
     {/* Footer always visible */}
      <FooterSection />
    </Router>
    
  );
}
