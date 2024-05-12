import axios from "axios";
import { useEffect, useState } from "react";



const Comment = () => {

    const [comments, setComments] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/comment')
            .then(res => setComments(res.data))
    }, [])




    return (
        <div>
            <h1 className="text-2xl font-bold">Comments</h1>
            {
                comments.map((comment) => (
                    <div key={comment._id}>
                        <p>{comment.comment}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Comment;