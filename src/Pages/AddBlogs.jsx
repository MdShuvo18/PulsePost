
import Footer from "./Footer";
import Navbar from "./Home/Navbar";


const AddBlogs = () => {
    const handleAddBlog = (e) => {
        e.preventDefault();
        console.log('ok')
        const form = e.target;
        const title = form.title.value
        const image = form.image.value
        const short_description = form.short_description.value
        const long_description = form.long_description.value
        const category = form.category.value
        const data = { title, image, short_description, long_description, category }
        console.log(data)

    }
    return (
        <div className="space-y-6">
            <Navbar></Navbar>
            <div>
                <h2 className="text-4xl font-bold text-center">Add Blogs</h2>

                <form  onSubmit={handleAddBlog} className="space-y-6 text-center mt-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2">
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">BLog Title</span>
                                </div>
                                <input type="text" placeholder="Title Here" name="title" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Image</span>
                                </div>
                                <input type="text" placeholder="img url" name="image" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="grid  md:grid-cols-2 lg:grid-cols-2">
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Short Description</span>
                                </div>
                                {/* <input type="text" placeholder="short description" name="short_description" className="input input-bordered w-full max-w-xs" /> */}
                                <textarea placeholder="Short Description" className="textarea textarea-bordered textarea-xs w-full max-w-xs" name="short_description" ></textarea>
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Long Description</span>
                                </div>
                                <textarea placeholder="Long Description" className="textarea textarea-bordered textarea-xs w-full max-w-xs" name="long_description" ></textarea>
                            </label>
                        </div>
                    </div>

                    {/* 3rd */}

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            {/* <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" /> */}
                            <select name="category" required>
                                <option value="">Select a Category</option>
                                <option value="Travel">Travel</option>

                            </select>
                        </label>
                    </div>

                    <button className="btn btn-success btn-outline text-white w-3/4 md:w-2/3 lg:w-2/5 ml-14 md:ml-6 lg:ml-10">Submit</button>
                </form>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddBlogs;