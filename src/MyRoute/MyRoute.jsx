import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout/MainLayout';
import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';
import DashBoard from '../Components/DashBoard/DashBoard';
import EachProduct from '../Components/EachProduct/EachProduct';
import SingleDashBoard from '../Components/SingleDashBoard/SingleDashBoard';
import Profile from '../Components/Profile/Profile';

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
                element: <EachProduct></EachProduct>,
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: "/dashboard",
                element: <DashBoard></DashBoard>,
                children: [
                    {
                        path: "/dashboard",
                        element: <SingleDashBoard></SingleDashBoard>
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile></Profile>
                    }
                ]
            }
        ]
    }
])

export default myCreatedRoute;