import axios from "axios";
import { useEffect, useState } from "react";



const Comment = () => {

    const [comments, setComments] = useState([])


    useEffect(() => {
        axios.get('https://blog-website-server-eight.vercel.app/comment')
            .then(res => setComments(res.data))
    }, [])




    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Comments</h1>
            {
                comments.map((comment) => (
                    <div key={comment._id} className="space-y-2">
                        <div className="flex gap-2 mb-2">
                        <img className="w-6 h-6 rounded-full" src={comment.profilePicture} alt="" />
                        <p>{comment.userName}</p>
                        </div>
                        <p>comment : {comment.comment}</p>
                       
                       
                    </div>
                ))
            }
        </div>
    );
};

export default Comment;