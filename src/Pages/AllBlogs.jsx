import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Home/Navbar";
import { Card } from 'antd';
import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const { Meta } = Card;



const AllBlogs = () => {
    const allBlogs = useLoaderData()
    console.log(allBlogs)
    const navigate = useNavigate()
    const [category, setCategoryFilter] = useState(null);

    const handlebutton = (id) => {
        navigate(`/blogdetails/${id}`)
    }

    const handleCustomization = (category) => {
        const toLowerCase = category.toLowerCase();
        setCategoryFilter(toLowerCase)
    }
    return (
        <div className="space-y-6">
            <Navbar></Navbar>
            <h2 className="text-5xl font-bold text-center">All blogs</h2>

            <div className="grid justify-items-center">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Category</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleCustomization("Travel")}>Travel</button></li>
                        <li><button onClick={() => handleCustomization("Food & Cooking")}>Food & Cooking</button></li>
                        <li><button onClick={() => handleCustomization("Business & Entrepreneurship")}>Business & Entrepreneurship</button></li>
                        <li><button onClick={() => handleCustomization("Health & Wellness")}>Health & Wellness</button></li>
                        <li><button onClick={() => handleCustomization("Home & Garden")}>Home & Garden</button></li>
                        <li><button onClick={() => handleCustomization("Photography")}>Photography</button></li>

                    </ul>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">


                {
                    allBlogs.filter(item => category === null || item.category.toLowerCase() === category).map(allBlog => <Card className="" key={allBlog._id}
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