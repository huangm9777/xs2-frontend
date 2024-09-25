import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Image,
    Input,
    Upload,
    Space,
    Select
  } from 'antd'
  
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import { submitPostAPI } from '@/api/post'
import { getToken } from '@/util'
import { getUserInfoAPI } from '@/api/user'


  
  const { Option } = Select;
  const { TextArea } = Input;
  
  const Edit = () => {
    const [content, setContent] = useState('');


    // submit form
    const onFinish = (formValues) => {
        // console.log(formValues);

        // handle form values
        const { content} = formValues;
        //transform imageList to string
        let images = ''
        images += imageList.map(item => item.response.data);
        const type = imageList.length;
        console.log(type);
        // arrange data
        const reqData = {
            content,
            layout: type,
            images
            
        }
        // send data to server
        submitPostAPI(reqData)
        
    }
    // store images list
    const [imageList, setImageList] = useState([]);
    //upload 
    const onChange = (value) => {
        setImageList(value.fileList);
        // console.log(value.fileList);
        
    }
    
    // preview image
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    return (


      <div className="publish">
        <Card
          title={
            <Breadcrumb items={[
              { title: <Link to={'/'}>Home</Link> },
              { title: 'Create new post' },
            ]}
            />
          }
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ type: 1 }}
            onFinish={onFinish}
          >
            {/* <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please enter your title' }]}
            >
              <Input placeholder="Please enter your title" style={{ width: 400 }} />
            </Form.Item>
            <Form.Item
              label="Channel"
              name="channel_id"
              rules={[{ required: true, message: 'Please select channel' }]}
            >
              <Select placeholder="Please select channel" style={{ width: 400 }}>
                <Option value={0}>推荐</Option>
              </Select>
            </Form.Item> */}
            <h1> What's in your mind? </h1>
            <Form.Item
            //   label="Content"
              name="content"
              rules={[{ required: true, message: 'Please enter content' }]}
            >
            
            <TextArea
                content={content}
                onChange={
                    (e) => {
                        setContent(e.target.value)
                        
                    }
                    
                }
                placeholder="What's happening?"
                autoSize={{ minRows: 3, maxRows: 15 }}
            />
            </Form.Item>
                        {/* upload  */}
            <Upload
                // card style
                listType="picture-card"
                showUploadList
                maxCount={9}
                // fileList={fileList}
                onPreview={handlePreview}
                action={'http://localhost:51802/upload/image'}
                
                headers={{
                    'Authorization': `Bearer ${getToken()}`
                }}
                onChange={onChange}

            >
                <div style={{ marginTop: 8 }}>
                {imageList.length >= 9 ? null : <PlusOutlined />}
                
                </div>
            </Upload>
            {/* preview */}

            {previewImage && (
                <Image
                    wrapperStyle={{
                    display: 'none',
                    }}
                    preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}

  
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Space>
                <Button size="large" type="primary" htmlType="submit">
                  Post
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  
  export default Edit
  