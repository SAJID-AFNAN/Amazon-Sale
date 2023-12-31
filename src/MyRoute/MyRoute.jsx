import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout/MainLayout';
import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';
import DashBoard from '../Components/DashBoard/DashBoard';

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
                element: <Products></Products>
            },
            {
                path: "/dashboard",
                element: <DashBoard></DashBoard>
            }
        ]
    }
])

export default myCreatedRoute;