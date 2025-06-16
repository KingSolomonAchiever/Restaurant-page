


// import React, { useState } from "react";
// import Logo from "../Assets/Landing Page Assets - Copy/Logo.svg";
// import Logo1 from "../Assets/Landing Page Assets - Copy/home-banner-background.png";
// import Logo2 from "../Assets/Landing Page Assets - Copy/home-banner-image.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaTimes } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";

// const Navbar = () => {
//   const [isToggle, setIsToggle] = useState(false);
//   const toggleMenu = () => setIsToggle(!isToggle);

//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <img
//         src={Logo1}
//         alt=""
//         className="w-full  object-cover fixed top-0 left-0 -z-20  h-px"
//       />

//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0 bg-white shadow z-40">
//         {/* Logo */}
//         <img src={Logo} alt="Logo" className="w-32" />

//         {/* Desktop Navigation Links */}
//         <ul className="hidden md:flex items-center space-x-6 font-semibold">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#testimonials">Testimonials</a></li>
//           <li><a href="#contact">Contact</a></li>
          
//             <FaShoppingCart className="cursor-pointer"/>
//           <li>
//             <button className="p-2.5 bg-black text-white font-medium rounded-2xl hover: ">
//               Booking Now
//             </button>
//           </li>
//         </ul>

//         {/* Hamburger Menu (Mobile only) */}
//         <div className="md:hidden z-50" onClick={toggleMenu}>
//           {isToggle ? (
//             <FaTimes className="w-6 h-6 cursor-pointer" />
//           ) : (
//             <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
//           )}
//         </div>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       {isToggle && (
//         <div className="md:hidden absolute top-16 right-6 bg-white shadow-md p-4 rounded z-40">
//           <ul className="flex flex-col space-y-4 font-semibold text-gray-700 sticky">
//             <li><a href="#home" onClick={toggleMenu}>Home</a></li>
//             <li><a href="#about" onClick={toggleMenu}>About</a></li>
//             <li><a href="#services" onClick={toggleMenu}>Services</a></li>
//             <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
//             <li>
//               <button className="p-2.5 bg-black text-white font-medium rounded-2xl w-full">
//                 Booking Now
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Hero Section */}
//       <div className="grid md:grid-cols-2 gap-y-12 pt-40 px-8">
//         <div>
//           <h2 className="text-4xl font-bold">Your Favourite Food Delivered & Fresh</h2>
//           <p className="mt-4 text-gray-700">
//             Healthy Switcher Chefs do all the prep work, like
//             peeling, chopping & marinating, so you can cook
//             a fresh food.
//           </p>
//           <button className="mt-6 px-4 py-2 bg-black text-white rounded-lg">
//             Order Now
//           </button>
//         </div>
//         <div className="flex justify-center md:justify-end">
//           <img src={Logo2} alt="Food Banner" className="w-64 md:w-80" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import Logo from "../Assets/Landing Page Assets - Copy/Logo.svg";
import Logo1 from "../Assets/Landing Page Assets - Copy/home-banner-background.png";
import Logo2 from "../Assets/Landing Page Assets - Copy/home-banner-image.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggleMenu = () => setIsToggle(!isToggle);

  return (
    <div className="relative">
      {/* Constrained Wrapper */}
      <div className="max-w-6xl mx-auto relative">
        {/* Background Image (only inside this container) */}
        <img
          src={Logo1}
          alt=""
          className="w-full object-cover absolute top-0 left-0 -z-10 h-full"
        />

        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow fixed top-0 left-0 right-0 z-40 max-w-6xl mx-auto">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-32" />

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6 font-semibold">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <FaShoppingCart className="cursor-pointer" />
            <li>
              <button className="p-2.5 bg-black text-white font-medium rounded-2xl">
                Booking Now
              </button>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden z-50" onClick={toggleMenu}>
            {isToggle ? (
              <FaTimes className="w-6 h-6 cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
            )}
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {isToggle && (
          <div className="md:hidden fixed top-20 right-6 bg-white shadow-md p-4 rounded z-50">
            <ul className="flex flex-col space-y-4 font-semibold text-gray-700">
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#services" onClick={toggleMenu}>Services</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
              <li>
                <button className="p-2.5 bg-black text-white font-medium rounded-2xl w-full">
                  Booking Now
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-y-12 pt-40 px-8">
          <div>
            <h2 className="text-4xl font-bold">Your Favourite Food Delivered & Fresh</h2>
            <p className="mt-4 text-gray-700">
              Healthy Switcher Chefs do all the prep work, like
              peeling, chopping & marinating, so you can cook
              a fresh food.
            </p>
            <button className="mt-6 px-4 py-2 bg-black text-white rounded-lg">
              Order Now
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={Logo2} alt="Food Banner" className="w-64 md:w-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
