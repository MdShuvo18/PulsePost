import { useLoaderData } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Footer from "./Footer";
import { Textarea } from '@chakra-ui/react'
import { useContext, useState } from "react";
import { AuthContext } from "../Component/AuthProvider";


const RecentBlogDetails = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    // const [comments, setComments] = useState([])
    const blogsDetail = useLoaderData()
    console.log(blogsDetail)

    const handleSubmit = () => {
        // setComments([...comments, comments])
        console.log('ok')
    }
    return (
        <div className="space-y-6">
            <Navbar></Navbar>
            <h1 className="text-4xl font-bold text-center">Blog Details</h1>
            <div>
                <div className="card h-2/4 bg-base-100 shadow-xl mb-6">
                    <figure><img src={blogsDetail.image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{blogsDetail.title}</h2>
                        <p><span className="text-lg font-semibold text-amber-800">Short Description</span> : {blogsDetail.short_description}</p>
                        <p><span className="text-lg font-semibold text-amber-800">Long Description</span> : {blogsDetail.long_description}</p>

                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <Textarea placeholder='Comment here....' />
                    <a  href="#_" className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">submit</span>
                    </a>
                </form>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default RecentBlogDetails;