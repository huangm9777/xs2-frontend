import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
  SearchOutlined,UserOutlined,SettingOutlined
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {fetchUserInfo} from '@/store/module/user';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const { Header, Sider } = Layout

const items = [
  {
    label: 'Home',
    key: '/home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Explore',
    key: '/explore',
    icon: <SearchOutlined />,
  },
  {
    label: 'Create',
    key: '/edit',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {

  //navigate to correct site
  const navigate = useNavigate()
  const OnMenuClick = (e) => {
    // console.log(e.key);
    const path = e.key
    navigate(path)
  }
  //highlight selected menu
  const location = useLocation()
  const selectedKeys = location.pathname

  const dispatch = useDispatch()
  // retrieve user info
  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])

  //set user info
  const name = useSelector(state => state.user.userInfo.name)

  
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> Logout
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            // defaultSelectedKeys={['/']}
            selectedKeys={selectedKeys}
            onClick={OnMenuClick}
            items={items}
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet/>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout