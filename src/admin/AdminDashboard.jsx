import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";// adjust path if firebase.js is in src/

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

  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const pendingCount = orders.filter((o) => o.status !== "Completed").length;
  const completedCount = orders.filter((o) => o.status === "Completed").length;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <a href="/admin" className="block px-3 py-2 rounded hover:bg-gray-700">
            Dashboard
          </a>
          <a href="/admin/orders" className="block px-3 py-2 rounded hover:bg-gray-700">
            Orders
          </a>
          <a href="/admin/bookings" className="block px-3 py-2 rounded hover:bg-gray-700">
            Bookings
          </a>
          <a href="/admin/users" className="block px-3 py-2 rounded hover:bg-gray-700">
            Users
          </a>
          <a href="/admin/analytics" className="block px-3 py-2 rounded hover:bg-gray-700">
            Analytics
          </a>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button className="w-full bg-red-600 py-2 rounded hover:bg-red-700">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">📊 Dashboard Overview</h1>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold">{orders.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold">Pending Orders</h2>
            <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl font-bold text-green-600">${totalRevenue}</p>
          </div>
        </div>

        {/* Placeholder for charts or quick links */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/admin/orders" className="text-blue-600 hover:underline">Manage Orders</a></li>
              <li><a href="/admin/bookings" className="text-blue-600 hover:underline">View Bookings</a></li>
              <li><a href="/admin/users" className="text-blue-600 hover:underline">User Management</a></li>
              <li><a href="/admin/analytics" className="text-blue-600 hover:underline">Analytics</a></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <p className="text-gray-600">Latest updates will appear here...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
