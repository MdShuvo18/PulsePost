import Swal from "sweetalert2";
import { motion } from 'framer-motion'
import { fadeIn } from "../Component/variants";



const NewsLetter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const getEmail = { email }
        console.log(getEmail);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for subscribing to our newsletter',
            showConfirmButton: false,
            timer: 2500
        })
        form.reset();
    }
    return (
        <div className=" bg-orange-50 h-64 border-2 rounded-lg items-center justify-center">
            <div className="space-y-4 lg:mt-8">

                <motion.div
                variants={fadeIn('up,0.2')}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }} className="flex items-center gap-2 justify-center">
                    <h2 className="text-4xl font-extrabold">Join Our Newsletter</h2>
                    <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/KDJk7H5/pngtree-rocket-logo-design-png-image-4032269.jpg" alt="" />
                </motion.div>
                <p className="text-2xl font-bold text-center">Get monthly exciting tips and exclusive updates straight to your inbox.</p>
                <form onSubmit={handleSubscribe} className="flex items-center justify-center gap-3">
                    <input type="email" name="email" className="border-2 border-gray-300 rounded-md px-4 py-2 w-2/5" placeholder="Enter your email" required />
                    <button className="bg-blue-500 btn-outline text-white rounded-md px-4 py-2 lg:w-1/6">Subscribe</button>

                </form>
            </div>
        </div>
    );
};

export default NewsLetter;