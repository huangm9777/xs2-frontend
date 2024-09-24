import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import  './index.scss'
import {useDispatch} from 'react-redux'
import {fetchLogin} from '@/store/module/user'
import { useEffect } from "react";
import { setToken } from "@/util";



const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // useEffect(() => {
  //   // check if user is logged in
  //   const user = localStorage.getItem('user')
  //   if(user) {
  //     // navigate('/home')
  //     //remind user login success
  //     message.success('You have Logined')
  //   }
  // })

  // submit
  const onFinish = async (values) => {
    console.log('Success:', values);
    //make request
    const response = await dispatch(fetchLogin(values))
    // route to home
    navigate('/home')
    //remind user login success
    message.success('Login Success')
    

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <Card className="login-container">
        {/* <img className="login-logo" src={logo} alt="" /> */}
        
        <Form 
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item  label="Username" name="name"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}>
            <Input size="large" placeholder="username" />
          </Form.Item >
          <Form.Item label="Password" name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}


export default Login;
