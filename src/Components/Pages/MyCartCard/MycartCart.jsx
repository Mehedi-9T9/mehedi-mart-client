import React, { useState } from 'react';
import { TbBrandAirtable } from 'react-icons/tb';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';


const MycartCart = ({product,handleRemove}) => {
    const {title, img, brand, productId}=product
    const [quantity, setQuantity]=useState(1)
    
    return (
        <div className='flex flex-col md:flex-row gap-5 justify-between items-center p-5 my-5 bg-white rounded'>
            <div>
                <img src={img} className='w-[100px] h-[100px]' alt={title} />
            </div>
            <div>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='flex justify-start items-center gap-x-3  font-bold text-blue-400'> <TbBrandAirtable className='text-black' />{brand}</p>
            <div className='space-x-4 mt-4 flex flex-row justify-center'>
            <button className=' bg-blue-400 text-black py-1 font-extrabold px-5 rounded'>-</button>
            <span className='  text-black py-1 font-extrabold px-5 rounded'>{quantity}</span>
            <button className=' bg-blue-400 text-black py-1 font-extrabold px-5 rounded'>+</button>
            </div>
            
            </div>
            <div className='flex flex-row md:flex-col gap-x-5 md:gap-y-3 '>
                <button onClick={()=>handleRemove(productId)} className='bg-blue-400 text-black py-1 px-5 rounded '><MdDeleteForever className='text-2xl ml-2' /> </button>
                <Link to={`/details/${productId}`}><button className='bg-blue-400 text-black py-1 px-5 rounded'>Details</button></Link>
            </div>
        </div>
    );
};

export default MycartCart;