import Footer from "@/pages/shared/Footer";
import Navbar from "@/pages/shared/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto min-h-screen  ">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default MainLayout;