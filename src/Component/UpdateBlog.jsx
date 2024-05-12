import { useLoaderData } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Home/Navbar";
import Swal from "sweetalert2";


const UpdateBlog = () => {
    const updates = useLoaderData();
    const { _id, title, short_description, long_description, image, category } = updates
    console.log(updates);

    const handleUpdateBlog = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const image = form.image.value;
        const category = form.category.value;
        const updateBlog = { title, short_description, long_description, image, category }

           // send data to the server
           fetch(`http://localhost:5000/addBlogCollection/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Blog Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (

        <div>
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold text-center">Update Blog</h2>
                <form onSubmit={handleUpdateBlog}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Blog Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" defaultValue={title} placeholder="Blog title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={image} placeholder="image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="short_description" defaultValue={short_description} placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="long_description" defaultValue={long_description} placeholder="TaLong Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* form Photo url row */}

                    <input type="submit" value="Update Coffee" className="btn btn-block" />

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};



export default UpdateBlog;