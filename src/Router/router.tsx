import MainLayout from "@/layout/MainLayout";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/about-us',
                element: <AboutUs/>
            }
        ]
    }
])