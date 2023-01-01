import React from 'react';
import './cart.css'




//product card
const CoursesCart = ({ singleCourse, setModal }) => {
  const { description, image, price, name} =
    singleCourse;

  return (
    // <div className="card w-60 card-compact bg-base-100 bg-color shadow-xl">
    //   <img className='h-72 w-52 ' src={image} alt="" />

    //   <div className="card-body">
    //     <h1 className="text-2xl font-semibold"> {name}</h1>
    //     <p className="text-1xl font-semibold"> Price: {price}</p>
    //     <div className="card-actions ">
    //       {description.length > 20 ? (
    //         <p>{description.slice(0, 20) + "..."} </p>
    //       ) : (
    //         <p>{description} </p>
    //       )}
    //       <div>
    //         <label
    //           onClick={() => setModal(singleCourse)}
    //           htmlFor="my-modal"
    //           className='btn btn-outline'
    //         >
    //           Buy Now
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

