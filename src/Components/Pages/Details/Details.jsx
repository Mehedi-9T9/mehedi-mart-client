import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TbCoinTakaFilled, TbBrandAirtable } from "react-icons/tb";
import { SiSimilarweb } from "react-icons/si";
import ProductCart from '../../SharedPages/ProductCart/ProductCart';
import UseAuthProvider from '../../../Hooks/UseAuthProvider';

const Details = () => {
    const {id} =useParams()
    const [product,setProduct]=useState({})
    const [similarProduct,setSimilarProduct]=useState([])
    const{handleAddToCart}=UseAuthProvider()

   useEffect(()=>{
    axios.get(`http://localhost:5000/products/singleData/?id=${id}`)
    .then(res => setProduct(res.data))
    
   },[id])
   useEffect(()=>{
    const fetchData =async()=>{
      try {
       const res= await axios.get(`http://localhost:5000/products/similarData/?category=${product.category}&brand=${product.brand}`)
       setSimilarProduct(res.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData()
   
    
   },[product.category, product.brand])
   console.log("similar Product is console",similarProduct);
    
    return (
        <div className=''>
            <div className='bg-white md:flex justify-around my-10 rounded-xl px-5 py-10'>
            <div className='md:w-[30%]'>
                <img src={product.img} alt={product.title} className='w-[300px] h-[300px]'/>
            </div>
            <div  className='md:w-[30%]'>
            <h2 className='text-2xl font-bold text-black'>{product.title}</h2>
            <p className='flex items-center gap-x-3 text-blue-400'> <TbBrandAirtable /> {product.brand} </p>
            <h3 className='text-xl font-semibold text-black mt-3'>Description</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum accusantium fugiat corporis porro est consequuntur! Doloribus dolore unde iste error, distinctio eveniet, in commodi eum quis voluptate, provident eaque.</p>
            <div className='space-x-10 mt-3'>
                <Link to="/"><button className='btn bg-blue-400 text-black font-bold'>Go Back</button></Link>
                <button onClick={()=>handleAddToCart(product)} className='btn bg-blue-400 text-black'>Add To Cart</button>
            </div>

            </div>
            <div  className='md:w-[30%]'>
            <h2 className='text-2xl font-bold text-black'>Specifications</h2>
            <div className="overflow-x-auto">
  <table className="table border mt-2">
    {/* head */}
   
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        
      </tr>
    </tbody>
  </table>
</div>

            </div>

            
            </div>

            <div>
              <h2 className='text-2xl font-bold text-black flex items-center gap-x-3 ml-7 md:ml-0'><SiSimilarweb className='text-blue-400' /> Similar Products</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-3 mb-5 mx-5 md:mx-0'>
                {
                  similarProduct.map(simiPro => <ProductCart key={simiPro._id} product={simiPro} />)
                }

              </div>

            </div>
            
            
        </div>
    );
};

export default Details;