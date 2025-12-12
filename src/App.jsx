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
import AdminDashboard from "./admin/AdminDashboard";
import Orders from "./admin/Orders";
import Users from "./admin/Users";
import Bookings from "./admin/Bookings";
import ProtectedRoute from "./admin/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <MenuSection />
              <AboutSection />
              <BookTableSection />
              <TestimonialSection />
              <FooterSection />
            </>
          }
        />

        <Route
          path="/menu"
          element={
            <>
              <Navbar />
              <MenuSection />
              <FooterSection />
            </>
          }
        />

        <Route
          path="/menu/:id"
          element={
            <>
              <Navbar />
              <ProductDetail />
              <FooterSection />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutSection />
              <FooterSection />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <FooterSection />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
              <FooterSection />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
              <FooterSection />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <Checkout />
              <FooterSection />
            </>
          }
        />

        <Route
          path="/book-table"
          element={
            <>
              <Navbar />
              <BookTableSection />
              <FooterSection />
            </>
          }
        />

       <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/orders"
  element={
    <ProtectedRoute>
      <Orders />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/users"
  element={
    <ProtectedRoute>
      <Users />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/bookings"
  element={
    <ProtectedRoute>
      <Bookings />
    </ProtectedRoute>
  }
/>
      </Routes>
    </Router>
  );
}
