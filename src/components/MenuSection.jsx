import React, { useState } from "react";
import burgerImg from "../assets/burger.avif";
import pizzaImg from "../assets/pizza.jpg";
import pizza1Img from "../assets/pizza1.webp";
import pasta1Img from "../assets/pasta1.avif";
import friesImg from "../assets/fries1.webp";
import pizza2Img from "../assets/pizza2.jpg";
import burger2Img from "../assets/burger2.jpg";
import burger3Img from "../assets/burger3.jpg";
import pasta2Img from "../assets/pasta2.jpg";

// Promo banners (optional)
const promos = [
  {
    id: 1,
    title: "Tasty Thursdays",
    discount: "20%",
    img: burgerImg,
  },
  {
    id: 2,
    title: "Pizza Days",
    discount: "15%",
    img: pizzaImg,
  },
];

// Menu categories
const menuCategories = ["All", "Burger", "Pizza", "Pasta", "Fries"];

// Menu items
const menuItems = [
  {
    id: 1,
    name: "Delicious Pizza",
    category: "Pizza",
    price: "$20",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    img: pizza1Img,
  },
  {
    id: 2,
    name: "Delicious Burger",
    category: "Burger",
    price: "$15",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    img: burgerImg,
  },
  {
    id: 3,
    name: "Delicious Pizza",
    category: "Pizza",
    price: "$17",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    img: pizzaImg,
  },
  {
    id: 4,
    name: "Delicious Pasta",
    category: "Pasta",
    price: "$18",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    img: pasta1Img,
  },
  {
    id: 5,
    name: "French Fries",
    category: "Fries",
    price: "$10",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    img: friesImg,
  },
  {
    id: 6,
    name: "Delicious Pizza",
    category: "Pizza",
    price: "$15",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    img: pizza2Img,
  },
  {
    id: 7,
    name: "Tasty Burger",
    category: "Burger",
    price: "$12",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    img: burger2Img,
  },
  {
    id: 8,
    name: "Tasty Burger",
    category: "Burger",
    price: "$14",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    img: burger3Img,
  },
  {
    id: 9,
    name: "Delicious Pasta",
    category: "Pasta",
    price: "$16",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    img: pasta2Img,
  },
];

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      {/* Menu Tabs */}
      <div className="text-center mb-12">
        <h1 className="font-vibes text-6xl mb-10 text-black">Our Menu</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-lg bg-gray-100 transition"
          >
            {/* Image */}
            <div className="overflow-hidden group">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Footer: same width, curved top-left */}
            <div className="bg-gray-800 text-white p-6 rounded-b-lg">
              <h3 className="font-semibold text-xl mb-3">{item.name}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{item.price}</span>
                <button className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold hover:bg-yellow-500 transition shadow-lg">
                  🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
