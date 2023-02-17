import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductCart from './../../ProductsCart/ProductCart';
import Modal from '../../ProductsCart/Modal/Modal'


const AllProducts = () => {
  const [modal, setModal] = useState(null);


  const {data: Produc} = useQuery({
    queryKey: ["Produc"],
    queryFn: async () => {
      try {
        const res = await fetch(" https://food-city-server.vercel.app/allProducts", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  return (
    <div className="px-5 my-10">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {Produc?.map((singleCourse, i) => (
          <ProductCart
            key={singleCourse._id}
            singleCourse={singleCourse}
            setModal={setModal}
          ></ProductCart>
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

export default AllProducts;