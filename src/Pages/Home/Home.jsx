import ExtraOne from "../ExtraOne";
import ExtraTwo from "../ExtraTwo";
import Footer from "../Footer";
import NewsLetter from "../NewsLetter";
import RecentBlogsSection from "../RecentBlogsSection";
import Banner from "./Banner";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="space-y-8">
            <Navbar></Navbar>
            <Banner></Banner>
            <RecentBlogsSection></RecentBlogsSection>
            <NewsLetter></NewsLetter>
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;