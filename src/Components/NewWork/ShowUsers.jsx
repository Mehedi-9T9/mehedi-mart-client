import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ShowUsers = () => {
    const [users, setUsers] = useState([])
    const [singleUser, setSingleUser] = useState({})
    useEffect(() => {
        axios.get("http://localhost:5000/user")
            .then(res => setUsers(res.data))
    }, [])

    const handleDelete = (user) => {
        axios.delete(`http://localhost:5000/user/${user?._id}`)
            .then(res => console.log(res.data))
    }
    const handleUpdate = (user) => {
        document.getElementById('my_modal_3').showModal()
        axios.get(`http://localhost:5000/user/${user?._id}`)
            .then(res => setSingleUser(res.data))
    }
    const confirmUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const gender = form.gender.value

        const updateInfo = { name, email, gender }
        axios.put(`http://localhost:5000/user/${singleUser?._id}`, updateInfo)
            .then(res => console.log(res.data))
    }


    return (
        <div className='pb-6 '>
            <h2 className='text-3xl font-bold text-red-500'>All Users: <span className='text-black'>{users?.length}</span> </h2>
            <div className='grid grid-cols-3 mt-6 gap-5'>
                {
                    users?.map(user => <div key={user._id} className='w-96 p-5 border rounded '>
                        <div>
                            <img src={user?.photo} alt="" className='w-24 h-24 rounded-full' />
                        </div>

                        <h2 className='text-2xl font-medium text-black'>Name: {user?.name}</h2>
                        <h3 className='text-xl font-medium text-black'>Email: {user?.email}</h3>
                        <h4 className='text-2xl font-medium text-green-500 mb-5'>Gender: {user?.gender}</h4>
                        <button onClick={() => handleDelete(user)} className='btn bg-red-100 text-black'>Delete</button>
                        <button onClick={() => handleUpdate(user)} className='btn bg-red-100 text-black ml-20'>Update</button>

                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <form onSubmit={confirmUpdate} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' defaultValue={singleUser?.name} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' defaultValue={singleUser?.email} className="input input-bordered" required />

                                    </div>


                                    <div className="form-control">
                                        Gender
                                        <label className="label cursor-pointer">

                                            <span className="label-text">Male</span>
                                            <input type="radio" name="gender" defaultValue={singleUser?.gender} value="male" className="radio checked:bg-red-500" defaultChecked />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Female</span>
                                            <input type="radio" name="gender" defaultValue={singleUser?.gender} value="female" className="radio checked:bg-blue-500" defaultChecked />
                                        </label>
                                    </div>


                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>


                    </div>)
                }

            </div>

        </div>
    );
};

export default ShowUsers;