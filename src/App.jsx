import { useState } from 'react'
import './App.css'
import { FaArrowTurnDown } from 'react-icons/fa6'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])
  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/products")
      setProducts(res.data)
      return res.data

    }
    // fetch('https://api.github.com/repos/TanStack/query').then((res) =>
    //   res.json(),
    //  const res=await axios.get("http://localhost:5000/products")
    //   .then((res)=> res.json())
    //     ),

  })




  if (isPending) {
    return <h2 className='text-5xl font-bold text-red-700 text-center'>Loading data ....</h2>
  }



  // console.log(count);
  const handleBrand = (e) => {
    e.preventDefault()
    const brand = e.target.value
    console.log(brand);
    // setCount(priceRange)
  }
  const handleCategory = (e) => {
    e.preventDefault()
    const category = e.target.value
    console.log(category);
    // setCount()
  }
  const handleMinPrice = (e) => {
    e.preventDefault()
    const minPrice = e.target.value
    console.log(minPrice);
    // setCount(priceRange)
  }
  const handleMaxPrice = (e) => {
    e.preventDefault()
    const maxPrice = e.target.value
    console.log(maxPrice);
    // setCount(priceRange)
  }

  return (
    <>
      <div className='flex'>
        {/* assaide bar */}
        <div className='w-[20%] h-screen bg-white'>
          <h2 className='text-xl font-semibold pt-10 pl-5'> Categorization <FaArrowTurnDown className='inline-block' /></h2>

          <h2 className='text-xl font-semibold pl-10 mt-5'>Brand</h2>
          <select onChange={handleBrand} className="select focus:outline-none focus:border-none focus:px-5 ml-5 max-w-xs">
            <option disabled selected>All Brand</option>
            <option>Samsung</option>
            <option>Xami</option>
            <option>Apple</option>
          </select>

          <h2 className='text-xl font-semibold pl-10 mt-5'>Cagetory</h2>
          <select onChange={handleCategory} className="select focus:outline-none focus:border-none focus:px-5 ml-5 max-w-xs">
            <option disabled selected>All Category</option>
            <option>Mobile</option>
            <option>Laptop</option>
            <option>Watch</option>

          </select>

          <h2 className='text-xl font-semibold pl-10 mt-5'>Price Range</h2>

          <label className='pl-12'>
            Min
            <input type="number" name="" id="" onChange={handleMinPrice} className='border w-[100px] rounded ml-2' />
          </label>
          <label className='block pl-12 mt-2' >
            Max
            <input type="number" name="" id="" onChange={handleMaxPrice} className='border w-[100px] rounded ml-2' />
          </label>





        </div>


        <div className='w-[80%]  pl-10 py-10 '>
          {/* for bannar  todo*/}
          <div></div>


          {/* For Porducts */}
          <div className='grid grid-cols-3 gap-4'>

            {
              products?.map(product => <div key={product?.productId} className="card bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={product?.img}
                    alt={product.title}
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <div className='flex gap-x-10'>
                    <p>Price : {product?.price}</p>
                    <p>Brand: {product?.brand}</p>
                  </div>
                  <h2 className="card-title">{product?.title}</h2>


                </div>
              </div>)
            }



          </div>

        </div>
      </div>





    </>
  )
}

export default App
