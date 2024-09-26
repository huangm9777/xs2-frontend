import { Layout, Menu, Popconfirm,message } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
  SearchOutlined,UserOutlined,SettingOutlined
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {fetchUserInfo,clearUserInfo} from '@/store/module/user';
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

  //user logout
  const onConfirm = () => {
    // console.log('logout');
    dispatch(clearUserInfo())
    navigate('/login')
    message.success('Log out Success')
    
    
  }

  
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm title="Do you want to logout？" okText="Logout" cancelText="Cancel" onConfirm={onConfirm}>
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
            defaultSelectedKeys={['/home']}
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