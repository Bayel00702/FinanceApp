import {useRoutes} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Form from "../components/Form/Form";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";


export default function Router () {
    const routes = useRoutes([
        {
            path: '',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
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