import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-12 mb-12">
        {/* Contact Us */}
        <div>
          <h3 className="text-3xl font-vibes mb-6">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Location</li>
            <li>Call +250 790 850 118</li>
            <li>shamicephas9@gmail.com</li>
          </ul>
        </div>

        {/* Feane Description + Social Icons */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-vibes mb-6">Gura</h3>
          <p className="text-gray-300 mb-6">
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-yellow-400 text-xl">
            <FaFacebookF className="hover:text-white transition-colors duration-300 cursor-pointer"/>
            <FaTwitter className="hover:text-white transition-colors duration-300 cursor-pointer"/>
            <FaLinkedinIn className="hover:text-white transition-colors duration-300 cursor-pointer"/>
            <FaInstagram className="hover:text-white transition-colors duration-300 cursor-pointer"/>
            <FaPinterestP className="hover:text-white transition-colors duration-300 cursor-pointer"/>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-3xl font-vibes mb-6">Opening Hours</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Everyday</li>
            <li>07.00 Am - 10.00 Pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 text-sm space-y-2">
        <p>© 2025 All Rights Reserved By Free Html Templates</p>
        <p>© SHAMI Cephas</p>
      </div>
    </footer>
  );
}
