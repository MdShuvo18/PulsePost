import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";


const Login = () => {
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {/* <div className="w-1/2 items-center mr-12">
                    <img className="rounded" src="https://i.ibb.co/JK3TJtt/login-concept-illustration-114360-757.jpg" alt="" />
                </div> */}
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-success">Login</button>
                        </div>
                        <button className="btn btn-outline btn-primary">SignIn With Google <FcGoogle /></button>
                        <button className="btn btn-outline btn-secondary">SignIn With Github<BsGithub /></button>
                    </form>
                    <p className="my-4 text-center"> New to Here :
                        <Link className="text-orange-700 font-bold" to='/signup'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;