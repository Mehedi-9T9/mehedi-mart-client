import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import App from '../../App';
import Login from '../Pages/Authentication/Login';
import Rejister from '../Pages/Authentication/Rejister';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <App></App>
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
    }
])

export default Routes;