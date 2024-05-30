
import Swal from "sweetalert2";
import Footer from "./Footer";
import Navbar from "./Home/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider";


const AddBlogs = () => {
    const { user } = useContext(AuthContext)
    const handleAddBlog = (e) => {
        e.preventDefault();
        console.log('ok')
        const form = e.target;
        const title = form.title.value
        const image = form.image.value
        const short_description = form.short_description.value
        const long_description = form.long_description.value
        const category = form.category.value
        const email = form.email.value
        const owner_name=form.owner_name.value
        const owner_photo= form.owner_photo.value

        const blogData = {owner_name, owner_photo, title, email, image, short_description, long_description, category }
        console.log(blogData)

        fetch('https://blog-website-server-eight.vercel.app/addBlogCollection', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blogData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            });

    }
    return (
        <div className="space-y-6">
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] p-24">

                <h2 className="text-3xl font-extrabold text-center">Add a Blog</h2>
                <form onSubmit={handleAddBlog}>
                    {/* Blog title and image row */}
                    <div className="md:flex mb-8 gap-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Blog Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="Blog Title" className="input input-bordered w-full"  required/>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                            </label>
                        </div>

                    </div>

                    {/* short and long description row */}
                    <div className="md:flex mb-8 gap-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="long_description" placeholder="Long Description" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>

                    {/* form category and user emailrow */}
                   
                    <div className="md:flex mb-8 gap-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>

                            <select name="category" className="h-12 rounded-md">
                                <option value="Travel">Travel</option>
                                <option value="Food & Cooking">Food & Cooking</option>
                                <option value="Business & Entrepreneurship">Business & Entrepreneurship</option>
                                <option value="Health & Wellness">Health & Wellness</option>
                                <option value="Home & Garden">Home & Garden</option>
                                <option value="Photography">Photography</option>
                            </select>
                            {/* <label className="input-group">
                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                            </label> */}
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" defaultValue={user.email} className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex mb-8 gap-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Blog Owner Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="owner_name" placeholder="owner name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Blog Owner Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="owner_photo" defaultValue={user.photoURL} className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>


                    <input type="submit" value="Add Blog" className="btn btn-block" />

                </form>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddBlogs;