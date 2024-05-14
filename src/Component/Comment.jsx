import { useQuery } from "@tanstack/react-query";





const Comment = () => {

    const { isPending, data: comments } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/comment')
            return res.json()
        }
    })
    // const [comments, setComments] = useState([])


    // useEffect(() => {
    //     axios.get('http://localhost:5000/comment')
    //         .then(res => setComments(res.data))
    // }, [])

    if (isPending) return "Loading..."


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