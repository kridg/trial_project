import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from "../App"
import Register from "../pages/authenticate/register";
import Login from "../pages/authenticate/Login";
import AppLayout from "../components/AppLayout";
import ForgotPass from "../pages/authenticate/ForgotPass";
import JobDashboard from "@/pages/JobDashboard";
import JobApply from "@/pages/JobApply";

const AppRouter = () => {
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
                    path: "/job-dashboard",
                    element:<JobDashboard/>
                },
                {
                    path:"/job-apply",
                    element:<JobApply/>
                }
            ]
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter