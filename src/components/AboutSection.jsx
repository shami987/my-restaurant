import React from "react";
import burgerExploded from "../assets/About.png"; 

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Burger Image */}
        <div className="relative flex justify-center">
          <img 
            src={burgerExploded} 
            alt="Exploded Burger" 
            className="w-full max-w-md animate-float"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-white">
          <h2 className="font-vibes text-5xl mb-6">We Are Feane</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            Read More
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}