import Login from '../page/Login'
import Article from '../page/Article'
import Home from '../page/xs-dashboard/component/Home'
import {createBrowserRouter} from 'react-router-dom'
import Edit from '../page/xs-dashboard/component/Edit/Edit'
import Layout from '../page/Layout'
import NotFound from '../page/NotFound'
import { AuthRoute } from '@/component/AuthRoute'
import Explore from '@/page/Explore'

 const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/article/:id',
        element: <Article/>
    },
    {
        path: '/',
        element: <AuthRoute> <Layout/></AuthRoute>,
        children: [
            {
                path: '/article',
                element: <Article/>
            },
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/edit',
                element: <Edit/>
            },
            {
                path: '/explore',
                element: <Explore/>

            }

        ]
    },{
        path: '/*',
        element: <NotFound/>
    },
    // {
    //     path: '/home',
    //     element: <Home/>
    // },
    // {
    //     path: '/edit',
    //     element: <Edit/>
    // }
])

export default router