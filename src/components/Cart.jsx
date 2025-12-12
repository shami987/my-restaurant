import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase"; // Firestore instance
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Fetch cart items from Firestore
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cart"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Update quantity
  const handleUpdateQuantity = async (id, newQuantity) => {
    try {
      const itemRef = doc(db, "cart", id);
      await updateDoc(itemRef, { quantity: newQuantity });
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // Delete item
  const handleDeleteItem = async (id) => {
    try {
      await deleteDoc(doc(db, "cart", id));
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-5">
        <h1 className="text-3xl font-bold mb-8">Your Cart 🛒</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      ${item.price} × {item.quantity}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-green-400 text-black rounded hover:bg-green-500"
                      >
                        + Add
                      </button>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="px-2 py-1 bg-blue-400 text-black rounded hover:bg-blue-500"
                      >
                        - Reduce
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <span className="text-lg font-bold">
                  ${item.price * item.quantity}
                </span>
              </div>
            ))}

            <div className="flex justify-between items-center mt-8">
              <h2 className="text-2xl font-bold">Total:</h2>
              <span className="text-2xl font-bold">${total}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition mt-6"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
