import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Component/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";
import toast, { Toaster } from 'react-hot-toast';
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [hoverName, setHoverName] = useState("")

    useEffect(() => {
        if (user) {
            setHoverName(user.displayName)
        } else {
            setHoverName("")
        }
    }, [user])


    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>

        {
            user && <>
                <li><NavLink to='/addblogs'>Add Blog</NavLink></li>
                <li><NavLink to='/allblogs'>All blogs</NavLink></li>
                <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
            </>
        }
        <li><NavLink>Featured Blogs</NavLink></li>
       

    </>

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("Sign out successfully")
            })
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="w-6 h-6 rounded-md" src="https://i.ibb.co/h7zCVxj/Flat-logo-Blogger-icon-Clipart-PNG.png" alt="" />
                    <a className="btn btn-ghost text-xl"><span className="text-orange-600 text-lg">P</span>ulse<span className="text-orange-600 text-lg">P</span>ost</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (
                            <div className="lg:tooltip" data-tip={hoverName}>
                                {
                                    user.photoURL ? (

                                        <img src={user.photoURL} className="w-10 h-10 rounded-full" alt={user.displayName} />

                                    ) : (
                                        <CgProfile></CgProfile>
                                    )
                                }

                            </div>

                        ) : (
                            <CgProfile></CgProfile>
                        )}
                    {
                        user
                            ? <button onClick={handleSignOut} className="btn btn-success bg-green-700 btn-outline text-black border-none">Sign Out</button>
                            : <div>
                                <div className="flex flex-row gap-1">
                                    <Link to='/login'> <button className="btn btn-success bg-green-700 btn-outline text-white border-none">Login</button></Link>
                                    <Link to='/signup'> <button className="btn btn-outline btn-success bg-orange-200 text-white border-none">Register</button></Link>
                                </div>
                            </div>
                    }

                </div>
            </div>
            <Toaster position="top-right" autoClose="2000"></Toaster>
        </div>
    );
};

export default Navbar;