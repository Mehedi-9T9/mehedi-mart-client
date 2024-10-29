import React from 'react';
import { TbCoinTakaFilled, TbBrandAirtable } from "react-icons/tb";


const ProductCart = ({product}) => {
    const {img, title, price, brand}=product
    return (
        <div className="card bg-base-100  shadow-xl relative">
                <figure className="px-10 pt-10">
                  <img
                    src={img}
                    alt={title}
                    className="rounded-xl w-[300px] h-[250px]" />
                </figure>
                <p className='flex items-center gap-x-3 absolute top-4 left-4 text-blue-400 text-2xl font-bold'> <TbCoinTakaFilled className='text-3xl text-black' />{price}</p>

                <div className="card-body ">
                <p className='flex justify-start items-center gap-x-3 -mb-3 font-bold text-blue-400'> <TbBrandAirtable className='text-black' />{brand}</p>
                <h2 className="card-title text-black">{title}</h2>
                  <div className='flex gap-x-10'>
                    <button className='btn bg-blue-400 text-black'>Details</button>
                    <button className='btn bg-blue-400 text-black'>Add To Cart</button>
                    
                    
                  </div>
                 


                </div>
              </div>
    );
};

export default ProductCart;