import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MycartCart from '../MyCartCard/MycartCart';
import Swal from 'sweetalert2';

const MyCart = () => {
    const[products,setProducts]=useState([])
    const [toggle, setToggle]=useState(true)

    const handleRemove=(id)=>{
        axios.delete(`http://localhost:5000/products/mycartDelete/?id=${id}`)
        .then(res =>{
            if(res.data.deletedCount){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Product Delete Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                setToggle(!toggle)
            }else{
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: "Product Delete Fail",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            
            
        })
    }
    useEffect(()=>{
        axios.get("http://localhost:5000/products/mycartProducts")
        .then(res => setProducts(res.data))
        
    },[toggle])

    return (
        <div className='flex justify-between'>
           <div className='w-[60%]'>
            {
                products.map(product => <MycartCart key={product.productId} product={product} handleRemove={handleRemove} />)
            }
           </div>


           <div className='w-[35%] bg-gray-200 my-5 p-7 rounded'>
            <h2 className='text-2xl font-bold text-black'>Your Selected Products <span className='text-blue-400 ml-3'>{products.length}</span></h2>

           </div>
            
        </div>
    );
};

export default MyCart;