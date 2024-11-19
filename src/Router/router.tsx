import MainLayout from "@/layout/MainLayout";
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
            }
        ]
    }
])