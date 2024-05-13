import { useContext, useEffect, useState } from "react";
import Footer from "../../Pages/Footer";
import Navbar from "../../Pages/Home/Navbar";
import axios from "axios";
import { AuthContext } from "../AuthProvider";


const Wishlist = () => {
    const { user } = useContext(AuthContext)
    const [loadData, setLoadData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/wishlist?userEmail=${user.email}`)
            .then(res => setLoadData(res.data))
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            {
                loadData.map(data => <h1 key={data._id}>{data.title}</h1>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Wishlist;