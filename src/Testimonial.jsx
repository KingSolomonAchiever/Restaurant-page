import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <p className="text-yellow-500 font-semibold mb-2">Testimonial</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        What They Are Saying
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-lg mx-auto">
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
          Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="flex justify-center mb-4">
          {Array(5).fill(0).map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.1 3.384a1 1 0 00.95.69h3.566c.969 0 1.371 1.24.588 1.81l-2.89 2.1a1 1 0 00-.364 1.118l1.1 3.384c.3.921-.755 1.688-1.54 1.118l-2.89-2.1a1 1 0 00-1.175 0l-2.89 2.1c-.784.57-1.838-.197-1.54-1.118l1.1-3.384a1 1 0 00-.364-1.118l-2.89-2.1c-.783-.57-.38-1.81.588-1.81h3.566a1 1 0 00.95-.69l1.1-3.384z" />
            </svg>
          ))}
        </div>
        <p className="font-semibold text-gray-800">John Doe</p>
      </div>
    </section>
  );
};

export default Testimonial;
