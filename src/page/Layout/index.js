import {Link, Outlet } from "react-router-dom";
import {Button} from 'antd'

const Layout = () => {
    return(

        <div>
            <h1>Layout</h1>
            <div>
                <Button type="primary">Primary Button</Button>
            </div>
            <Link to="/board">board</Link>
            <Link to="/about">about</Link>
            <Outlet/>
        </div>
    )
}
export default Layout;