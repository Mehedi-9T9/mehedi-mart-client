import React from 'react';
import UseAuthProvider from '../../../Hooks/UseAuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Rejister = () => {
    const { rejisterUser } = UseAuthProvider()
    const navigate = useNavigate()

    const handleRejister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        rejisterUser(email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);
                if (user) {
                    navigate("/")
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Rejister Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(error);
                if (error) {
                    Swal.fire({
                        position: "top",
                        icon: "fail",
                        title: "Rejister Fail",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // ..
            });
    }
    return (
        <div className='md:p-20'>
            <div className=" bg-base-100  w-96 mx-auto rounded">
                <h2 className='text-center text-3xl font-semibold p-5'>Rejiser Now</h2>
                <form onSubmit={handleRejister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <Link to="/login"><p className='text-blue-700 font-bold pb-5 text-center'>Go Login</p></Link>

            </div>
        </div>
    );
};

export default Rejister;