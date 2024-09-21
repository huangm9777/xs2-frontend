import {Link, Outlet } from "react-router-dom";
import {Button} from 'antd'
import Sidebar from "@/page/xs-dashboard/component/Sidebar/Sidebar";

const Layout = () => {
    return(

        <div>
            <Sidebar />
            <div className="main-content">
                
                <Outlet/>
            
            </div>
            {/* <Link to="/board">board</Link>
            <Link to="/about">about</Link> */}
        </div>
    )
}
export default Layout;