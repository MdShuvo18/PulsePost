import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Wishlist = () => {
    const wishlists = useLoaderData()
    const [listOfWish, setListOfWish] = useState([])
    useEffect(() => {
        fetch('')
    }, [])
    return (
        <div>

        </div>
    );
};

export default Wishlist;