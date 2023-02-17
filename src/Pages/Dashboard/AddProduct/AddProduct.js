// import { useQuery } from '@tanstack/react-query';
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();
  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            seller: data.seller,
            name: data.name,
            price: data.price,
            original: data.original,
            number: data.number,
            location: data.location,
            description: data.description,
            quality: data.quality,
            category: data.category,
            image: imgData.data.url,
            
          };

          // save doctor information to the database
          fetch(" https://food-city-server.vercel.app/allProducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/ManageProducts");
            });
        }
      });
  };

  // if(isLoading){
  //     return <Loading></Loading>
  // }

  return (
    <div className="">
      <form
        className="flex justify-center mt-10"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="grid grid-cols-1 gap-4 ">
          <h2 className="text-4xl">Add A Product</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text"> Name :</span>
              </label>
              <input
                type="text"
                {...register("seller", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Product Name :</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            {/* 11 */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Resale Price :</span>
              </label>
              <input
                type="text"
                {...register("price", {
                  required: "Price is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Original Price :</span>
              </label>
              <input
                type="text"
                {...register("original", {
                  required: "Price is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Mobile Number:</span>
              </label>
              <input
                type="text"
                {...register("number", {
                  required: "Mobile Number is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Location:</span>
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "location is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
                <span className="label-text">Quality:</span>
                     <select {...register("quality")}>
                        <option value="Fresh_Healthy">Fresh & Healthy</option>
                        <option value="Hot_Dishes">Hot Dishes</option>
                        <option value="Normal">Normal</option>
                    </select>
                </div>
                 <div className="form-control w-full max-w-xs">
                 <span className="label-text">Category:</span>
                     <select {...register("category")}>
                        <option value="Chicken">Chicken</option>
                        <option value="Curry">Curry</option>
                        <option value="Rice">Rice</option>
                        <option value="Fish">Fish</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Icecreams">Icecreams</option>
                        <option value="Soft Drinks">Soft Drinks</option>
                    </select>
                </div>
          </div>
          <div className="form-control border w-full ">
            {/* <span className="label-text">Description:</span> */}
            <textarea
              className="textarea textarea-bordered h-24 w-full"
              placeholder="description"
              name="comment"
              form="usrform"
              {...register("description", {
                required: "Description is Required",
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-20  mt-4"
            value="submit"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};


export default AddProduct;
