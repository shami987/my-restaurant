import { useParams, useNavigate } from "react-router-dom";
import { menuItems } from "./MenuSection"; // export menuItems from MenuSection so you can reuse it
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ProductDetail() {
  const { id } = useParams();
  const product = menuItems.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  // Convert "$20" → 20
  const basePrice = parseFloat(product.price.replace("$", ""));
  const totalPrice = basePrice * quantity;

  const handleAddToCart = async () => {
    try {
      await addDoc(collection(db, "cart"), {
        name: product.name,
        price: basePrice,
        quantity: quantity,
        img: product.img, // make sure this is a valid path or imported image
      });
      alert("Item added to cart!");
      navigate("/cart"); // redirect to cart page
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Example extra info */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Fresh dough</li>
              <li>Cheese blend</li>
              <li>Tomato sauce</li>
              <li>Seasonal toppings</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Nutrition Info</h2>
            <p className="text-gray-600">Approx. 250 kcal per serving</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Reviews</h2>
            <p className="text-gray-600 italic">
              ⭐️⭐️⭐️⭐️☆ “Really tasty and fresh!”
            </p>
          </div>

          {/* Price + quantity + Add to Cart */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${totalPrice}</span>
            {/* Quantity selector */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="bg-gray-300 text-black px-3 py-1 rounded-full font-bold hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="bg-gray-300 text-black px-3 py-1 rounded-full font-bold hover:bg-gray-400 transition"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg"
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
