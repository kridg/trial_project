import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from "../App"
import Register from "../pages/authenticate/register";
import Login from "../pages/authenticate/Login";
import AppLayout from "../components/AppLayout";
import ForgotPass from "../pages/authenticate/ForgotPass";
import JobDashboard from "@/pages/JobDashboard";
import JobApply from "@/pages/JobApply";
import supabase from "../../supabaseClient";
import Trainings from "@/pages/Trainings";
import Blogs from "@/pages/Blogs";
import AboutUs from "@/pages/AboutUs";
const AppRouter = () => {
    // const {session}=useAuth()
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                { index: true, element: <App /> },
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/forgot-pass",
                    element:<ForgotPass/>
                },
                {
                    path:"/training",
                    element:<Trainings/>
                },
                {
                    path:"/blogs",
                    element:<Blogs/>
                },
                {
                    path:"about-us",
                    element:<AboutUs/>
                },
                {
                    path: "/job-dashboard",
                    element:<JobDashboard/>,
                    loader:async()=>{
                        const {data:{session}}=await supabase.auth.getSession()
                        if(!session){
                            console.log("Not authorized!!")
                        }

                        const {data:profile}=await supabase.from("profiles").select("role").eq("id",session.user.id)
                        .single()

                        if (profile?.role !=="employer"){
                            console.log("Cannot access this page without authorization!")
                        }
                        return profile
                    }
                },
                {
                    path:"/job-apply",
                    element:<JobApply/>
                },
            ]
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter