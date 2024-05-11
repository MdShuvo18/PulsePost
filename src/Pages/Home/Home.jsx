import Footer from "../Footer";
import RecentBlogsSection from "../RecentBlogsSection";
import Banner from "./Banner";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <RecentBlogsSection></RecentBlogsSection>
            this is home
            <Footer></Footer>
        </div>
    );
};

export default Home;