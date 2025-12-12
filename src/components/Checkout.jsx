import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // make sure auth is exported from firebase.js

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // Fetch cart items from Firestore
  useEffect(() => {
    const fetchCartItems = async () => {
      const querySnapshot = await getDocs(collection(db, "cart"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCartItems(items);
    };
    fetchCartItems();
  }, []);

  const clearCart = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "cart"));
      querySnapshot.forEach(async (cartDoc) => {
        await deleteDoc(doc(db, "cart", cartDoc.id));
      });
      console.log("Cart cleared!");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "orders"), {
        uid: auth.currentUser ? auth.currentUser.uid : null, // 🔑 user ID
        name,
        address,
        phone,
        items: cartItems,
        total,
        createdAt: new Date(),
      });
      alert("Order placed successfully!");
      await clearCart(); // 🔥 clear cart after order
      navigate("/"); // redirect to homepage or thank-you page
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto px-5 bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="flex justify-between items-center font-bold text-xl">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
}
