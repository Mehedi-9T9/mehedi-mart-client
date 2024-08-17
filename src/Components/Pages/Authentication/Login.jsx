import React from 'react';
import UseAuthProvider from '../../../Hooks/UseAuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6';

const Login = () => {
    const { loginUser, googleLogin } = UseAuthProvider()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        loginUser(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                if (user) {
                    navigate("/")
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Login Successfull",
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
                        position: "top-end",
                        icon: "error",
                        title: "Login Fail",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });

    }

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                if (user) {
                    navigate("/")

                }

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(error);
            });


    }
    return (
        <div className='md:p-20'>
            <div className=" bg-base-100  w-96 mx-auto rounded">
                <h2 className='text-center text-3xl font-semibold p-5'>Login Now</h2>
                <form onSubmit={handleLogin} className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='flex items-center justify-around pb-5'>
                    <button onClick={handleGoogle}><FaGoogle className='text-3xl text-green-700'></FaGoogle></button>
                    <Link to="/rejister"><p className='text-blue-700 font-bold'>Go Rejister</p></Link>
                </div>

            </div>
        </div>
    );
};

export default Login;