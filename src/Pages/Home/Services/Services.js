import React from "react";
import Service from "./Service";
//service
const Services = () => {

  const servicesData = [
    {
        id: 1,
        name: 'Chicken',
        button:"Chicken",
    },
    {
        id: 2,
        name: 'Curry',
        button:"Curry"
    },
    {
        id: 3,
        name: 'Rice',
        button:"Rice",
    },{
        id: 4,
        name: 'Fish',
        button:"Fish",
    },{
        id: 5,
        name: 'Fruits',
        button:"Fruits",
    },{
        id: 6,
        name: 'Icecreams',
        button:"Icecreams",
    },
    {
      id: 7,
      name: 'Soft Drinks',
      button:"Drinks",
  }
];

  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-[2.5rem] text-gray-700 font-bold py-3">
          Category
        </h3>
      </div>
      <div className="md:flex block xl:gap-6 md:gap-2 gap-4 justify-center items-center">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;