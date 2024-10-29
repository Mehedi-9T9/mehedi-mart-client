import React from 'react';

import UseAuthProvider from '../../../Hooks/UseAuthProvider';

import { getAuth, signOut } from "firebase/auth";
import { app } from '../../../../firebase/firebase.config';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const { users } = UseAuthProvider()
    const auth = getAuth(app)
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Logout Successfull",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });

    }
    const pathName =useLocation()

const navItems=[
    {
        title: "Home",
        path: "/"
    },
    {
        title: "My Cart",
        path: "/mycart"
    }
    
]

    return (
        <>

            {/* <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Mehedi-Mart</a>
                </div>
                <div className="flex-none ">
                    <div className="dropdown dropdown-end">
                        <div className="btn btn-ghost btn-circle">
                            <FaHome className='text-red-600 text-3xl' />
                        </div>

                    </div>
                    <div className="dropdown dropdown-end ml-0 md:ml-5">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaShoppingCart className='text-2xl text-[#6ab04c]' />
                                <span className="badge badge-sm indicator-item text-[#4834d4]">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 md:w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end ml-0 md:ml-5">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            {users ? <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div> : <Link to="/login"><button className='text-white bg-black px-5 py-2 rounded'>Login</button></Link>}
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className="navbar bg-slate-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
                navItems.map(nav => <li className={`${nav.path === pathName.pathname && "text-blue-400"} font-bold`} key={nav.title}> <Link to={nav.path}>{nav.title}</Link> </li>)


            }
        
      </ul>
    </div>
    <div className='ml-10'>
        <img src="/1.png" alt="logo" className='h-[80px]' />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
  <form  className='flex gap-x-3'>
              <label className="input input-bordered border-blue-400 rounded-full flex items-center gap-2 ">
                <input type="text" className="grow  placeholder-black" name='title' placeholder="Search" />
                
              </label>
              <button className='btn btn-circle bg-blue-400'><FaSearch className='text-black'></FaSearch></button>
            </form>
    
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1">
    {
                navItems.map(nav => <li className={`${nav.path === pathName.pathname && "text-blue-400"} font-bold`} key={nav.title}> <Link to={nav.path}>{nav.title}</Link> </li>)


            }
        
    </ul>
  {users ? <div className="">
<button onClick={handleLogout} className='btn bg-blue-400 text-black'> Logout</button>
 </div> : <Link to="/login"><button className='btn bg-blue-400 text-black'>Login</button></Link>}
  </div>
</div>

        </>
    );
};

export default Navbar;