import { useLoaderData } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import Comment from "../Component/Comment";


const RecentBlogDetails = () => {
    const { user } = useContext(AuthContext)

    const userEmail = user?.email;
    const userName = user?.displayName;
    const profilePicture = user?.photoURL
    const blogsDetail = useLoaderData()
    console.log(blogsDetail)

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        if(userEmail === blogsDetail.email){
            Swal.fire({
                icon: 'error',
                title: 'Sorry...',
                text: 'Can not comment on own blog',
            })
            return;
        }


        axios.post('http://localhost:5000/comment',
            { comment: comment, email: userEmail, blogsId: blogsDetail._id, userName: userName, profilePicture: profilePicture })
            .then(res => console.log(res.data))
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
                    <textarea name="comment" placeholder="comment here..." className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                    <div>  <input type="submit" className="btn" /></div>
                </form>

            </div>
            <Comment></Comment>
            <Footer></Footer>
        </div>
    );
};

export default RecentBlogDetails;