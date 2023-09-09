import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import MyProperties from "../Pages/MyProperties/MyProperties";
import RentalList from "../Pages/RentalList/RentalList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard";
import TenacnyApplication from "../Pages/TenancyApplication/TenancyApplication";

export const routers = createBrowserRouter([
    {
        path: "*",
        element: <ErrorPage />,
    },
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/my-properties",
                element: <MyProperties />
            },
            {
                path: "/rental-list/:rentSlug",
                element: <RentalList />
            },
            {
                path: "/tenancy-application",
                element: <TenacnyApplication />
            }
        ] 
    }
])