import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="bg-[#F6F6F6]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;