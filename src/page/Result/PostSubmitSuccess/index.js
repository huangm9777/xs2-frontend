import React from 'react';
import { Button, Result } from 'antd';
const PostSubmitSuccess = () => (
  <Result
    status="success"
    title="Post Created Successfully!"
    extra={
      <Button type="primary" key="console" onClick={() => window.location.href = '/'}> 
        Return to Home
      </Button>
    }
  />
)
export default PostSubmitSuccess;