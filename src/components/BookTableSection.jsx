import React, { useState } from "react";

export default function BookTableSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Booking data:", formData);
    alert(`Table booked for ${formData.persons} person(s) on ${formData.date}`);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      persons: "",
      date: "",
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12">
        {/* Left Side - Form */}
        <div>
          <h2 className="font-vibes text-6xl mb-10 text-black">Book A Table</h2>
          
          <div className="space-y-5">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:border-gray-400 transition bg-white"
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:border-gray-400 transition bg-white"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:border-gray-400 transition bg-white"
              />
            </div>

            {/* Number of Persons Dropdown */}
            <div className="relative">
              <select
                name="persons"
                value={formData.persons}
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:border-gray-400 transition appearance-none bg-white cursor-pointer text-gray-700"
              >
                <option value="">How many persons?</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5">5 Persons</option>
                <option value="6">6 Persons</option>
                <option value="7">7 Persons</option>
                <option value="8">8 Persons</option>
                <option value="9">9 Persons</option>
                <option value="10+">10+ Persons</option>
              </select>
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Date Input */}
            <div className="relative">
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="mm/dd/yyyy"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
                className="w-full px-5 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:border-gray-400 transition bg-white"
              />
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="bg-yellow-400 text-black px-16 py-4 rounded-full font-bold text-base hover:bg-yellow-300 transition shadow-md uppercase tracking-wide"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="relative">
          <div className="w-full h-full min-h-[600px] bg-gray-300 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.045668742825!2d30.05876!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6e1c8d1e9e1%3A0x5c7f8f8f8f8f8f8f!2sKaruruma%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1234567890123!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location - Karuruma, Kigali"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}