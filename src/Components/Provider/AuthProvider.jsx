import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../../firebase/firebase.config';
import axios from 'axios';
import Swal from 'sweetalert2';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)

    //authentication related work
    const auth = getAuth(app);
    const rejisterUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                setUsers(user)
                // ...
            } else {
                // User is signed out
                setUsers(null)
                // ...
            }
        });
    }, [auth])

    //add to cart related work
    const handleAddToCart =(product)=>{
        console.log("handleCart",product);
        
        delete product._id
        axios.post("http://localhost:5000/products/myCart", product)
        .then(res => {
          if(res.data.insertedId){
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Product Added Successfull",
              showConfirmButton: false,
              timer: 1500
          });
          }else{
            Swal.fire({
              position: "top",
              icon: "fail",
              title: "Sorry Fail Added",
              showConfirmButton: false,
              timer: 1500
          });
          }
        })
    }


    const authInfo = { rejisterUser, loginUser, users, googleLogin, handleAddToCart }


    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    )

};

export default AuthProvider;