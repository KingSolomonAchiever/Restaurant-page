import React from "react";
import { FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Contact Box */}
      <div className="text-center px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Have Question In Mind?<br />Let Us Help You</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto mt-6">
          <input
            type="email"
            placeholder="yourmail@gmail.com"
            className="w-full md:w-2/3 px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black  px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 max-w-7xl mx-auto">
          {/* Logo & Socials */}
          <div className="space-y-4">
            <h1 className="font-bold text-xl">FOODIE</h1>
            <div className="flex gap-4 text-gray-700">
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm" >
            <div className="space-y-2">
              <p className="text-slate-400">Quality</p>
              <p className="text-slate-400">Help</p>
              <p className="text-slate-400">Share</p>
              <p className="text-slate-400">Careers</p>
              <p className="text-slate-400">Work</p>
              <p className="text-slate-400">Testimonials</p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-400">244-5333-7783</p>
              <p className="text-slate-400">hello@food.com</p>
              <p className="text-slate-400">press@food.com</p>
              <p className="text-slate-400">contact@food.com</p>
            </div>
            <div className="space-y-2 text-slate-400">
              <p className="text-slate-400">Terms & Conditions</p>
              <p className="text-slate-400">Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactFooter;
