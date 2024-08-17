import { useState } from 'react'
import './App.css'
import { FaArrowTurnDown } from 'react-icons/fa6'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(null)
  const [brand, setBrand] = useState(null)
  // const [minPrice, setMinPrice] = useState(null)


  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/products")
      setProducts(res.data)
      return res.data
    }
  })


  if (isPending) {
    return <h2 className='text-5xl font-bold text-red-700 text-center'>Loading data ....</h2>
  }

  const handleCategory = (e) => {
    e.preventDefault()
    const catego = e.target.value
    const lowCategory = catego.toLowerCase()
    setCategory(lowCategory)
    axios.get(`http://localhost:5000/products/category/?category=${lowCategory}`)
      .then(res => setProducts(res.data))

  }
  console.log(brand);
  console.log(products);
  // console.log(count);
  const handleBrand = (e) => {
    e.preventDefault()
    const brand = e.target.value
    const lowBrand = brand.toLowerCase()
    setBrand(lowBrand)
    if (category) {
      axios.get(`http://localhost:5000/products/categoryBrand/?brand=${lowBrand}&category=${category}`)
        .then(res => setProducts(res.data))
    } else {
      axios.get(`http://localhost:5000/products/brand/?brand=${lowBrand}`)
        .then(res => setProducts(res.data))

    }

    // setCount(priceRange)
  }

  const handlePrice = (e) => {
    e.preventDefault()
    const minPrice = e.target.min.value
    const maxPrice = e.target.max.value


    if (category) {
      axios.get(`http://localhost:5000/products/categoryPrice/?min=${minPrice}&max=${maxPrice}&category=${category}`)
        .then(res => setProducts(res.data))

    }
    if (brand) {
      axios.get(`http://localhost:5000/products/brandPrice/?min=${minPrice}&max=${maxPrice}&brand=${brand}`)
        .then(res => setProducts(res.data))


    }
    if (category && brand) {
      axios.get(`http://localhost:5000/products/mixed/?min=${minPrice}&max=${maxPrice}&category=${category}&brand=${brand}`)
        .then(res => setProducts(res.data))

    } else {
      axios.get(`http://localhost:5000/products/price/?min=${minPrice}&max=${maxPrice}`)
        .then(res => setProducts(res.data))

    }




    // setCount(priceRange)
  }


  return (
    <>
      <div className='flex'>
        {/* assaide bar */}
        <div className='w-[20%] h-screen bg-white'>
          <h2 className='text-xl font-semibold pt-10 pl-5'> Categorization <FaArrowTurnDown className='inline-block' /></h2>


          <h2 className='text-xl font-semibold pl-10 mt-5'>Cagetory</h2>
          <select onChange={handleCategory} className="select focus:outline-none focus:border-none focus:px-5 ml-5 max-w-xs">
            <option disabled selected>All Category</option>
            <option>Mobile</option>
            <option>Laptop</option>
            <option>Watch</option>

          </select>
          <h2 className='text-xl font-semibold pl-10 mt-5'>Brand</h2>
          <select onChange={handleBrand} className="select focus:outline-none focus:border-none focus:px-5 ml-5 max-w-xs">
            <option disabled selected>All Brand</option>
            <option>Samsung</option>
            <option>Asus</option>
            <option>Apple</option>
          </select>



          <h2 className='text-xl font-semibold pl-10 mt-5'>Price Range</h2>

          <form onSubmit={handlePrice}>
            <label className='pl-12'>
              Min
              <input type="number" name="min" defaultValue="10000" id="" className='border w-[100px] rounded ml-2' />
            </label>
            <label className='block pl-12 mt-2' >
              Max
              <input type="number" name="max" defaultValue="30000" id="" className='border w-[100px] rounded ml-2' />
            </label>
            <button className='bg-black text-white text-center px-5 py-1 ml-20 mt-2'>Search</button>
          </form>





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
