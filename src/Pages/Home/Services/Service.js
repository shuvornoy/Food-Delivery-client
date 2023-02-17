import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Service = ({ service }) => {
  const { setFilter } = useContext(AuthContext);

  const { data: products } = useQuery({
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

  const navigate = useNavigate();

  const Submit = (_id) => {
    setFilter(_id);
    navigate(`/product-card`);

    // console.log(id)
  };

  const { button } = service;
  return (
       <div className="card w-48 h-28  bg-base-100 shadow-xl">
         <button className="h-48 text-center bg-orange-400"  onClick={() => Submit(button)}>
          <h2 className="text-2xl">{button}</h2>
            <div className="card-actions justify-end">
            </div>
        </button>
      </div>
  );
};

export default Service;