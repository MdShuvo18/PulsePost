import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const RecentBlogsSection = () => {

    const [blogs, setBlogs] = useState([])
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/addBlogCollection')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)

            })
        console.log(blogs)
    }, [])


    // const handleExpand = () => {
    //     setExpand(!expand)
    // }
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-center">Recent Blogs Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    blogs.map(blog => <div key={blog._id} className="card-container">
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
                                        {/* {expand ? blog.short_description : `${blog.short_description.slice(0, 80)}...`}
                                        {
                                            blog.short_description.length > 80 &&
                                            <Button variant='link' color='blue.400' onClick={handleExpand}>
                                                {expand ? 'Read less' : 'Read more'}
                                            </Button>
                                        } */}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                      Category :  {blog.category}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
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
        </div>
    );
};

export default RecentBlogsSection;