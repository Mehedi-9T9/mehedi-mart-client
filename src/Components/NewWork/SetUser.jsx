import axios from "axios";


const SetUser = () => {
    const handleUser = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const gender = form.gender.value
        const photo = form.photo.value
        const userInfo = { name, email, password, gender, photo }
        // console.log(userInfo);
        axios.post("http://localhost:5000/user", userInfo)
            .then(res => console.log(res.data))
    }
    return (
        <div className='md:p-20'>
            <div className=" bg-base-100  w-96 mx-auto rounded">
                <h2 className='text-center text-3xl font-semibold p-5'>Set User</h2>
                <form onSubmit={handleUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        Gender
                        <label className="label cursor-pointer">

                            <span className="label-text">Male</span>
                            <input type="radio" name="gender" value="male" className="radio checked:bg-red-500" defaultChecked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Female</span>
                            <input type="radio" name="gender" value="female" className="radio checked:bg-blue-500" defaultChecked />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default SetUser;