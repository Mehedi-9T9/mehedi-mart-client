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

           
            <div className="navbar bg-white md:bg-slate-50">
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
        <img src="/1.png" alt="logo" className='h-[80px] rounded-md' />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
  <form  className='flex gap-x-3'>
              <label className="input input-bordered border-blue-400 rounded-full flex items-center gap-2  ">
                <input type="text" className="grow  placeholder-black " name='title' placeholder="Search" /> 
              </label>
              <button className='btn btn-circle bg-blue-400'><FaSearch className='text-black'></FaSearch></button>
            </form>
    
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 hidden md:flex">
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