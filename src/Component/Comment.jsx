import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";





const Comment = () => {

    const { isPending, data: comments } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch('https://blog-website-server-eight.vercel.app/comment')
            return res.json()
        }
    })
    // const [comments, setComments] = useState([])


    // useEffect(() => {
    //     axios.get('https://blog-website-server-eight.vercel.app/comment')
    //         .then(res => setComments(res.data))
    // }, [])

    if (isPending) return <Spin />;


    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Comments</h1>
            {
                comments?.map((comment) => (
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