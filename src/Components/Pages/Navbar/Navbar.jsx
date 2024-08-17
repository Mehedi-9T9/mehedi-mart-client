import React from 'react';
import { FaHome, FaShoppingCart } from "react-icons/fa";
import UseAuthProvider from '../../../Hooks/UseAuthProvider';

import { getAuth, signOut } from "firebase/auth";
import { app } from '../../../../firebase/firebase.config';
import { Link } from 'react-router-dom';

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


    return (
        <>

            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Mehedi-Mart</a>
                </div>
                <div className="flex-none ">
                    <div className="dropdown dropdown-end">
                        <div className="btn btn-ghost btn-circle">
                            <FaHome className='text-red-600 text-3xl' />
                        </div>

                    </div>
                    <div className="dropdown dropdown-end ml-2 md:ml-5">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaShoppingCart className='text-2xl text-[#6ab04c]' />
                                <span className="badge badge-sm indicator-item text-[#4834d4]">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end ml-2 md:ml-5">
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
            </div>

        </>
    );
};

export default Navbar;