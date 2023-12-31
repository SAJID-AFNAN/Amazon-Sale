import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout/MainLayout';
import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';
import DashBoard from '../Components/DashBoard/DashBoard';
import EachProduct from '../Components/EachProduct/EachProduct';

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path: "/product/:id",
                element: <EachProduct></EachProduct>
            },
            {
                path: "/dashboard",
                element: <DashBoard></DashBoard>
            }
        ]
    }
])

export default myCreatedRoute;