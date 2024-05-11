import { useLoaderData } from "react-router-dom";


const RecentBlogDetails = () => {
    const blogsDetail = useLoaderData()
    console.log(blogsDetail)

    return (
        <div>
            {blogsDetail.title}
        </div>
    );
};

export default RecentBlogDetails;