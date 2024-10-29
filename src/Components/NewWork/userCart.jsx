import React from 'react';

const userCart = ({ data }) => {
    const { name, email, photo, gender } = data
    return (
        <div className='w-96 p-5'>
            <div>
                <img src={photo} alt="" />
            </div>

            <h2 className='text-2xl font-medium text-black'>Name: {name}</h2>
            <h3 className='text-xl font-medium text-black'>Email: {email}</h3>
            <h4 className='text-2xl font-medium text-green-500'>Gender: {gender}</h4>


        </div>
    );
};

export default userCart;