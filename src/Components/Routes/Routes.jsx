import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import App from '../../App';
import Login from '../Pages/Authentication/Login';
import Rejister from '../Pages/Authentication/Rejister';
import SetUser from '../NewWork/SetUser';
import ShowUsers from '../NewWork/ShowUsers';
import Details from '../Pages/Details/Details';
import MyCart from '../Pages/MyCart/MyCart';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <App></App>
            },
            {
                path: "/mycart",
                element: <MyCart />
            },
            {
                path: "/details/:id",
                element: <Details />
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/rejister",
        element: <Rejister></Rejister>
    },
    {
        path: "/setuser",
        element: <SetUser></SetUser>
    },
    {
        path: "/showusers",
        element: <ShowUsers></ShowUsers>
    }
])

export default Routes;