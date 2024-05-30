import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider";
import Footer from "./Footer";
import Navbar from "./Home/Navbar";
import { Spin } from "antd";


const Featured = () => {
    const{user}=useContext(AuthContext)
    console.log(user)
    const { isPending, data: features } = useQuery({
        queryKey: ['features'],
        queryFn: async () => {
            const response = await fetch('https://blog-website-server-eight.vercel.app/addBlogCollection')
            return response.json()

        }
    })

    console.log(features)

    if(isPending) return <Spin></Spin>

    return (
        <div className="space-y-6">
            <Navbar></Navbar>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Serial no.</th>
                                <th>Blog Title</th>
                                <th>Blog Owner</th>
                                <th>Owner photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                features?.map((feature,index) => (
                                    <tr key={feature._id} >
                                        <td>{index+1}</td>
                                        <td>{feature.title}</td>
                                        <td>{feature.owner_name}</td>
                                        <td><img  src={feature.owner_photo} className="rounded-full w-12 h-12" alt=""/></td>
                                    </tr>
                                ))
                            }
                          
                        </tbody>
                    </table>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Featured;