import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';

const Product = () => {
  const Product = useLoaderData();
  console.log(Product)
    return (
      <div>
       
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8">
            {
               Product?.map(singleCourse =><ProductCart key={singleCourse._id} singleCourse={singleCourse} ></ProductCart> )
            }
            </div>
          </div>
        </div>
        </div>
    );
};

export default Product;