import Login from '../page/Login'
import Article from '../page/Article'
import Home from '../page/xs-dashboard/component/Home'
import {createBrowserRouter} from 'react-router-dom'
import Edit from '../page/xs-dashboard/component/Edit/Edit'

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/article',
        element: <Article/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/edit',
        element: <Edit/>
    }
])

export default router