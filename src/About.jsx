import React from "react";

import foodImage from "../Assets/Landing Page Assets - Copy/about-background-image.png"; 

const About = () => {
  return (
    <section className="py-16 px-4 md:px-20 flex flex-col lg:flex-row items-center gap-12 bg-white">
      {/* Image with background shape */}
      <div className="relative flex-1 w-full max-w-md">
        <div className="absolute -left-64 top-4 w-72 h-96 bg-orange-400 rounded-full z-0 hidden sm:block"></div>
        <img
          src={foodImage}
          alt="Healthy Food"
          className="relative z-10 rounded-full  object-cover w-80 h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <p className="text-orange-500 font-semibold mb-2">About</p>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
          Food Is An Important Part Of A Balanced Diet
        </h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="text-gray-600 mb-6">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            Learn More
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-black">
            <span className="bg-gray-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
