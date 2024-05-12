import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const RecentBlogsSection = () => {

    const [blogs, setBlogs] = useState([])
    const [visible, setVisible] = useState(6)

    const navigate = useNavigate()
    // const [expand, setExpand] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/addBlogCollection')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)

            })
        console.log(blogs)
    }, [])

    const handlebutton = (id) => {
        navigate(`/blogdetails/${id}`)
    }
    const handleShowMore = () => {
        setVisible(prev => prev + 6)
    }

    // const handleExpand = () => {
    //     setExpand(!expand)
    // }
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-center">Recent Blogs Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    blogs.slice(0, visible).map(blog => <div key={blog._id} className="card-container">
                        <Card maxW='sm' h='100%' display='flex' flexDirection='column'>
                            <CardBody>
                                <Image
                                    src={blog.image}
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{blog.title}</Heading>
                                    <Text>
                                        {blog.short_description}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        Category :  {blog.category}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button onClick={() => handlebutton(blog._id)} variant='solid' colorScheme='blue'>
                                        Details
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue'>
                                        Wishlist
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </div>)
                }




            </div>
           <div className=" lg:ml-[550px]">
           {
                blogs.length > visible && (

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
        </div>
    );
};

export default RecentBlogsSection;