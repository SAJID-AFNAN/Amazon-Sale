import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Components/MainLayout/MainLayout'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import myCreatedRoute from './MyRoute/MyRoute'

// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path: "/products",
//         element: <Products></Products>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
