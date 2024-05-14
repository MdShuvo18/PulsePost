import { useContext, useEffect, useState } from "react";
import Footer from "../../Pages/Footer";
import Navbar from "../../Pages/Home/Navbar";
import axios from "axios";
import { AuthContext } from "../AuthProvider";
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Wishlist = () => {
    const { user } = useContext(AuthContext)
    const [loadData, setLoadData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://blog-website-server-eight.vercel.app/wishlist?userEmail=${user.email}`)
            .then(res => setLoadData(res.data))
    }, [])

    const handlebutton = (id) => {
        navigate(`/wishlistdetails/${id}`)
        console.log(id)
    }

    const handleRemove = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://blog-website-server-eight.vercel.app/wishlist/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Remove!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });

                    })
            }
        });
    }



    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-extrabold text-center">WishList</h2>
            <div className="grid grid-cols-1 gap-4"> {
                loadData.map(data => <Card key={data._id}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={data.image}
                        alt=''
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='md'>{data.title}</Heading>

                            <Text py='2'>
                                {data.short_description}
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button onClick={() => handlebutton(data._id)} variant='solid' colorScheme='blue'>
                                Details
                            </Button>
                            <Button onClick={() => handleRemove(data._id)} className="ml-3" variant='solid' colorScheme='blue'>
                                Remove
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>)
            }</div>
            <Footer></Footer>

        </div>
    );
};

export default Wishlist;