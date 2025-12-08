
import heroImage from "../assets/burger-fries.jpg";
import burgerPromo from "../assets/burger2.jpg";
import pizzaPromo from "../assets/pizza.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Fast Food Restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde.",
  },
  {
    title: "Fast Food Restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde.",
  },
  {
    title: "Fast Food Restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
 <section
  className="pt-0 pb-20 bg-cover bg-center bg-no-repeat min-h-[60vh] relative"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
      }}
    >
      

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center pt-20 md:pt-28
">
        {/* LEFT: sliding content */}
        <div className="p-8 rounded-lg max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={current} // important for AnimatePresence
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-vibes text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] leading-tight text-white md:whitespace-nowrap">
                {slides[current].title}
              </h1>
              <p className="text-gray-200 mt-5 max-w-md leading-relaxed">
                {slides[current].description}
              </p>
              <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-lg">
                Order Now
              </button>
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex mt-8 space-x-3">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  current === index ? "bg-yellow-400" : "bg-white/40"
                }`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Promo Section */}
   <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-8">
    {/* Promo 1 */}
    <div className="bg-gray-800 rounded-2xl p-8 flex items-center gap-6 shadow-lg group">
      {/* Circular Image with Yellow Border */}
      <div className="relative flex-shrink-0">
        <div className="w-48 h-48 rounded-full border-4 border-yellow-400 overflow-hidden">
          <img
            src={burgerPromo}
            alt="Tasty Thursdays"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="text-white">
        <h3 className="font-vibes text-3xl mb-2">Tasty Thursdays</h3>
        <p className="text-5xl font-bold mb-6">
          20% <span className="text-2xl font-normal">Off</span>
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition inline-flex items-center gap-2">
          Order Now 🛒
        </button>
      </div>
    </div>

    {/* Promo 2 */}
    <div className="bg-gray-800 rounded-2xl p-8 flex items-center gap-6 shadow-lg group">
      {/* Circular Image with Yellow Border */}
      <div className="relative flex-shrink-0">
        <div className="w-48 h-48 rounded-full border-4 border-yellow-400 overflow-hidden">
          <img
            src={pizzaPromo}
            alt="Pizza Days"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="text-white">
        <h3 className="font-vibes text-3xl mb-2">Pizza Days</h3>
        <p className="text-5xl font-bold mb-6">
          15% <span className="text-2xl font-normal">Off</span>
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition inline-flex items-center gap-2">
          Order Now 🛒
        </button>
      </div>
    </div>
  </div>
</section>

  
    </>
   
   
  );
}
