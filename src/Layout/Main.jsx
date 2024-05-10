import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto mt-4">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;