import React from 'react';
import './cart.css'


//product card
const CoursesCart = ({ singleCourse, setModal }) => {
  const { description, image, price, name} =
    singleCourse;

  return (
    <>
                <div className=" bg-white h-auto md:w-[250px] w-auto xl:w-[220px] xl:h-[350px] cart shadow  hover:shadow-md"> 
                <div  className="w-full cursor-pointer h-[180px] overflow-hidden flex items-center justify-center">
                  <img src={image}alt=""  className="w-[150px] h-[150px] object-contain cartImg" />
                </div>
                <h1 className='font-[600] ml-3'>{name}</h1>
                <div className="px-3">
                <p className="">
                {description.length > 50 ? (
                 <p>{description.slice(0, 50) + "..."} </p>
                ) : (
              <p>{description} </p>
         )}</p>
                <h3>Price: <span className=" text-red-400">৳{price}</span></h3>
                <div className=" items-center justify-between flex-col sm:flex-row hidden sm:flex">
                  <button
                  className=" bg-orange-500 p-1 rounded-md text-white mt-2"
                 ><label
                         onClick={() => setModal(singleCourse)}
                          htmlFor="my-modal"
                        >
                         Buy Now
                          </label>
                 </button>
                </div>
                </div>
            </div>
    </>
  );
};

export default CoursesCart;

