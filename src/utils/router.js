import {useRoutes} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddBtc from "../components/Addbtc/AddBTC";
import Profile from "../pages/Profile/Profile";


export default function Router () {
    const routes = useRoutes([
        {
            path: '',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/addbtc',
                    element: <AddBtc/>
                },
                {
                    path : '/profile',
                    element: <Profile/>
                }

            ]
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/login',
            element: <Login/>
        },

    ]);
    return routes
}