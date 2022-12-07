import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Customers from "../pages/Customers";
import Home from "../pages/Home/Home";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Payment from "../pages/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/payment",
                element: <Payment />,
            },
            {
                path: "/customers",
                element: <Customers />,
            },
        ],
    },
]);

export default router;