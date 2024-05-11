import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Home/Navbar";
import { Card } from 'antd';
import { Button, Text } from "@chakra-ui/react";

const { Meta } = Card;



const AllBlogs = () => {
    const allBlogs = useLoaderData()
    console.log(allBlogs)
    const navigate = useNavigate()

    const handlebutton = (id) => {
        navigate(`/blogdetails/${id}`)
    }
    return (
        <div className="space-y-6">
            <Navbar></Navbar>
            <h2 className="text-5xl font-bold text-center">All blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">


                {
                    allBlogs.map(allBlog => <Card className="" key={allBlog._id}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={allBlog.image} />}
                    >
                        <Meta title={allBlog.title} />
                        <Text><span className="text-orange-600 font-bold">Short Description:</span> {allBlog.short_description}</Text>
                        <Text><span className="text-orange-600 font-bold">Category:</span> {allBlog.category}</Text>
                        <div className="grid grid-cols-2 gap-2">
                            <Button onClick={() => handlebutton(allBlog._id)} className="btn btn-outline btn-primary">Details</Button>
                            <Button className="btn btn-outline btn-success">Whishlist</Button>
                        </div>
                    </Card>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBlogs;