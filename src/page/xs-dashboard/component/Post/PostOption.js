import React from 'react';
import { StarOutlined,HeartOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
import './PostOption.css';
const App = () => (
    
    <Flex  className='post-option'>
      <Tooltip title="like">
        <Button shape="circle" icon={<HeartOutlined />} />
      </Tooltip>
      <Button icon={<StarOutlined />}>Save</Button>
      
    </Flex>
);
export default App;