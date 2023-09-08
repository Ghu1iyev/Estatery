import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import MyProperties from "../Pages/MyProperties/MyProperties";
import RentalList from "../Pages/RentalList/RentalList";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
                element: <Home />
            },
            {
                path: "/my-properties",
                element: <MyProperties />
            },
            {
                path: "/rental-list/:rentSlug",
                element: <RentalList />
            }
        ] 
    }
])