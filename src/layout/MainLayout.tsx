import Footer from "@/pages/shared/Footer";
import Navbar from "@/pages/shared/Navbar";
import {motion} from "framer-motion"
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
    const location = useLocation();

    const showDiscountButton = !["/login", "/signup"].includes(location.pathname);

    return (
        <>
            <Navbar />
            <div>
  {showDiscountButton && (
    <div className="hidden lg:block fixed top-1/2 left-0 transform translate-y-1/2 z-50">
      <motion.div
        className="bg-red-500 px-4 py-2 text-sm font-bold text-white -rotate-90 rounded-t-md cursor-pointer"
        
      >
        Get Discount
      </motion.div>
    </div>
  )}
</div>
            <div className="container mx-auto min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
