import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Home/Navbar";
import { Card } from 'antd';
import { Button, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Component/AuthProvider";



const { Meta } = Card;



const AllBlogs = () => {

    const { user } = useContext(AuthContext)
    const allBlogs = useLoaderData()
    console.log(allBlogs)
    const navigate = useNavigate()
    const [category, setCategoryFilter] = useState(null);
    const [searchItem, setSearchItem] = useState('')
    const [visible, setVisible] = useState(6)
    const handleShowMore = () => {
        setVisible(prev => prev + 6)
    }


    const handlebutton = (id) => {
        navigate(`/blogdetails/${id}`)
    }

    const handleCustomization = (category) => {
        const toLowerCase = category.toLowerCase();
        setCategoryFilter(toLowerCase)
    }

    const handleWishList = (allBlog) => {
        // console.log(allBlog)
        const userEmail = user.email
        const { title, short_description, long_description, category, email, image } = allBlog
        const wishList = { userEmail, title, short_description, long_description, category, email, image }


        console.log(allBlog)
        axios.post('http://localhost:5000/wishlist', wishList)
            .then(res => console.log(res.data))
    }




    return (
        <div className="space-y-6">
            <Navbar></Navbar>
            <h2 className="text-5xl font-bold text-center">All blogs</h2>

            <input
                placeholder="Search by title"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                style={{ maxWidth: 300, margin: '0 auto', marginBottom: 20 }} />
            <button className="">search</button>

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
                    allBlogs.filter(item => category === null || item.category.toLowerCase() === category && item.title.toLowerCase().includes(searchItem.toLowerCase())).slice(0, visible).map(allBlog => <Card className="" key={allBlog._id}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={allBlog.image} />}
                    >
                        <Meta title={allBlog.title} />
                        <Text><span className="text-orange-600 font-bold">Short Description:</span> {allBlog.short_description}</Text>
                        <Text><span className="text-orange-600 font-bold">Category:</span> {allBlog.category}</Text>
                        <div className="grid grid-cols-2 gap-2">
                            <Button onClick={() => handlebutton(allBlog._id)} className="btn btn-outline btn-primary">Details</Button>
                            <Button onClick={() => handleWishList(allBlog)} className="btn btn-outline btn-success">Whishlist</Button>
                        </div>
                    </Card>)
                }

                {
                    allBlogs.length > visible && (

                        <a onClick={handleShowMore} href="#_" className=" relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative">Show More</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>

                    )
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBlogs;