// import React from "react";
// import logo from "../Assets/Landing Page Assets - Copy/pick-meals-image.png"
// import logo1 from "../Assets/Landing Page Assets - Copy/choose-image.png"


// const Works = () => {
//   return (
//     <div className="mt-20">
//         <div>  
//       <h2 className="text-center  font-serif text-xl mb-3">Works</h2>
//       <p className="text-center md:p-10">
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate amet  <br></br>
//         a animi, rem aliquam, inventore tempore fuga nobis perferendis,<br></br>
//         necessitatibus cupiditate omnis maiores eum si t aliquid minus similique<br></br>
//         architecto labore!
//       </p>
//       </div>


//       <div className=" md:flex flex-row gap-8 mt-10">
//       <div className="bg-slate-100 w-72 rounded-2xl ml-12 sm:mt-6">
//     <img src={logo} alt="" className="items-center pl-16" />
//     <h2 className="text-center text-xl  pt-6 font-semibold font-serif">Pick Meals</h2>
//     <p className="text-center font-thin pb-5">Lorem ipsum dolor sit, amet <br></br>
//        consectetur adipisicing elit.  <br></br> 
//        corporis deserunt? Harum, fugiat <br></br>
//        asperiores quo quibusdam maxime </p>
//       </div>



//      <div className="bg-slate-100 w-72 rounded-2xl md:ml-6  mt-10 ml-12">
//       <img src={logo1} alt=""  className="items-center pl-16"/>
//         <h2 className="text-center text-xl  pt-6 font-semibold font-serif">How Often You Choose</h2>
//         <p className="text-center font-thin pb-5">Lorem ipsum dolor sit amet consectetur  <br />
//           adipisicing elit. Assumenda, laborum.</p>
//      </div>


//      <div className="bg-slate-100 w-72 rounded-2xl md:ml-6  mt-10 ml-12">
//       <img src={logo1} alt=""  className="items-center pl-16"/>
//         <h2 className="text-center text-xl  pt-6 font-semibold font-serif">How Often You Choose</h2>
//         <p className="text-center font-thin pb-5">Lorem ipsum dolor sit amet consectetur  <br />
//           adipisicing elit. Assumenda, laborum.</p>
//      </div>
//       </div>
//     </div>
//   );
// };

// export default Works;










import React from "react";
import logo from "../Assets/Landing Page Assets - Copy/pick-meals-image.png";
import logo1 from "../Assets/Landing Page Assets - Copy/choose-image.png";

const Works = () => {
  const workItems = [
    {
      id: 1,
      image: logo,
      title: "Pick Meals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, fugiat asperiores quo quibusdam maxime.",
    },
    {
      id: 2,
      image: logo1,
      title: "How Often You Choose",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laborum.",
    },
    {
      id: 3,
      image: logo1,
      title: "Fast Delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laborum.",
    },
  ];

  return (
    <section className="mt-20 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold">Works</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate amet a animi, rem aliquam, inventore tempore fuga nobis perferendis, necessitatibus cupiditate omnis maiores eum sit aliquid minus similique architecto labore!
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {workItems.map((item) => (
          <div
            key={item.id}
            className="bg-slate-100 w-full max-w-xs rounded-2xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold font-serif mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
