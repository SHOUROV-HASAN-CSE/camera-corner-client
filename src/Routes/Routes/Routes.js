import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import MyOrders from "../../Pages/BuyerPanel/MyOrders/MyOrders";
import Categories from "../../Pages/Categories/Categories";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import ReportedItem from "../../Pages/Dashboard/ReportedItem/ReportedItem";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/SellerPanel/AddProduct/AddProduct";
import MyProduct from "../../Pages/SellerPanel/MyProduct/MyProduct";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/categories',
        element: <PrivateRoute><Categories/></PrivateRoute>
      },
      {
        path:'/addproduct',
        element:<PrivateRoute><AddProduct/></PrivateRoute>
      },
      {
        path:'/myorders',
        element:<PrivateRoute><MyOrders/></PrivateRoute>
      },
      {
        path:'/<myproduct/>',
        element:<PrivateRoute><MyProduct/></PrivateRoute>
      },
    ]
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children: [
      {
        path:'/dashboard',
        element: <AdminRoute><AllBuyer/></AdminRoute>
      },
      {
        path:'/dashboard/allseller',
        element: <AdminRoute><AllSeller/></AdminRoute>
      },
      {
        path:'/dashboard/reporteditem',
        element: <AdminRoute><ReportedItem/></AdminRoute>
      },
    ] 
  },
  {
    path:'*',
    element:<Error/>
  }
])


export default router;