import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import CoursesCart from './../../CoursesCart/CoursesCart';
import Modal from '../../CoursesCart/Modal/Modal'


const ProductCard = () => {
  const [catagory, setCatagory] = useState();
  const [modal, setModal] = useState(null);
  const { filter } = useContext(AuthContext);

  const {data: doctors} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(" http://localhost:5000/allProducts", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  useEffect(() => {
    
          if(filter === "Chicken"){
              const filter = doctors?.filter((item)=>item.category === "Chicken")
              setCatagory(filter)
          }
          if(filter === "Curry"){
              const filter = doctors?.filter((item)=>item.category === "Curry")
              setCatagory(filter)
          }
          

          if(filter === "Rice"){
              const filter = doctors?.filter((item)=>item.category === "Rice")
              setCatagory(filter)
          }
          if(filter === "Fish"){
            const filter = doctors?.filter((item)=>item.category === "Fish")
            setCatagory(filter)
        }
        if(filter === "Fruits"){
          const filter = doctors?.filter((item)=>item.category === "Fruits")
          setCatagory(filter)
      }
      if(filter === "Icecreams"){
        const filter = doctors?.filter((item)=>item.category === "Icecreams")
        setCatagory(filter)
    }      if(filter === "Soft Drinks"){
        const filter = doctors?.filter((item)=>item.category === "Soft Drinks")
        setCatagory(filter)
    }
  }, []);
  console.log(catagory)


  return (
    <div className="px-5 my-10">
      <div className="grid gap-6 grid-cols-4 md:grid-cols-4 lg:grid-cols-5">
        {catagory?.map((singleCourse, i) => (
          <CoursesCart
            key={singleCourse._id}
            singleCourse={singleCourse}
            setModal={setModal}
          ></CoursesCart>
        ))}
      </div>
      { modal &&
        <Modal 
      modal={modal}
      setModal={setModal}
      ></Modal>
      }
    </div>
  );
};

export default ProductCard;