import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Mike Hamell",
    role: "magna aliqua",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Moana Michell",
    role: "magna aliqua",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "John Carter",
    role: "magna aliqua",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Sarah Lee",
    role: "magna aliqua",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + perPage) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - perPage + testimonials.length) % testimonials.length
    );
  };

  // Get the current set of testimonials based on `perPage`.
  const visible = [];
  for (let i = 0; i < perPage; i++) {
    visible.push(testimonials[(index + i) % testimonials.length]);
  }

  return (
    <section className="w-full flex flex-col items-center py-20">
      <h2 className="font-vibes text-5xl text-gray-900 mb-12 text-center">
        What Says Our Customers
      </h2>

      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {visible.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex flex-col items-center w-full"
          >
            <div className="bg-gray-900 text-white p-8 rounded-lg w-full mb-6 min-h-[220px] flex flex-col justify-between">
              <p className="text-lg mb-4">{item.text}</p>
              <div>
                <h3 className="font-bold text-xl">{item.name}</h3>
                <p className="text-sm text-gray-300">{item.role}</p>
              </div>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-yellow-400 shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-xl shadow hover:bg-yellow-300"
        >
          {'<'}
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-xl shadow hover:bg-yellow-300"
        >
          {'>'}
        </button>
      </div>
    </section>
  );
}
