import { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const orderRef = doc(db, "orders", id);
      await updateDoc(orderRef, { status: newStatus });
      setOrders((prev) =>
        prev.map((order) =>
          order.id === id ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {orders.length === 0 ? (
          <p className="text-gray-600">No orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                  <p className="text-gray-600">Customer: {order.name}</p>
                  <p className="text-gray-600">Phone: {order.phone}</p>
                  <p className="text-gray-600">Address: {order.address}</p>
                  <p className="text-gray-600">Total: ${order.total}</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.name} × {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">
                    Status: {order.status || "Pending"}
                  </p>
                  <button
                    onClick={() => handleUpdateStatus(order.id, "Completed")}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Mark Completed
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
