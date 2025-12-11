import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import BookTableSection from "./components/BookTableSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


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
     <Route path="/menu/:id" element={<ProductDetail />} /> 
     <Route path="/about" element={<AboutSection/>} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
     <Route path="/book-table" element={<BookTableSection/>} />
    </Routes>
      
     {/* Footer always visible */}
      <FooterSection />
    </Router>
    
  );
}
