import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';

const UseAuthProvider = () => {
    const all = useContext(AuthContext)
    return all
};

export default UseAuthProvider;