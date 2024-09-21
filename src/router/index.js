import Login from '../page/Login'
import Article from '../page/Article'
import Home from '../page/xs-dashboard/component/Home'
import {createBrowserRouter} from 'react-router-dom'
import Edit from '../page/xs-dashboard/component/Edit/Edit'
import Layout from '../page/Layout'
import Board from '../page/Board'   
import About from '../page/About'
import NotFound from '../page/NotFound'
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
        path: '/home',
        element: <Home/>
    },
    {
        path: '/edit',
        element: <Edit/>
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Board/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'board',
                element: <Board/>
            }
        ]
    },{
        path: '/*',
        element: <NotFound/>
    }
])

export default router