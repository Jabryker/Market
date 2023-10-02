import { FC, useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, message, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
}

interface SpecificationData {
  name: string;
  value: string;
}

export const CreateProduct: FC = () => {
  const basicApi: string = process.env.REACT_APP_API_URL || '';
  const token: string = localStorage.getItem('access') || '';
  const userInfoString: string | null = localStorage.getItem('userInfo');
  const userInfo: any = userInfoString !== null ? JSON.parse(userInfoString) : '';
  const userId: number = userInfo.id;

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const [form] = Form.useForm();

  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [specifications, setSpecifications] = useState<SpecificationData[]>([]);
  const [userID, setUserId] = useState<any>([]);

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/accounts/sellers/${userId}/`)
      .then((response) => {
        const sellerData = response.data;
        setUserId(sellerData.store.id); // Предположим, что токен хранится в sellerData.token
      })
      .catch((error) => {
        console.error('Error loading seller data:', error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get('/api/v1/stores/categories/')
      .then((response) => {
        setCategories(response.data.results);
      })
      .catch((error) => {
        console.error('Error loading categories:', error);
      });
  }, []);

  const handleImageChange = (info: any) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const addSpecification = () => {
    setSpecifications([...specifications, { name: '', value: '' }]);
  };

  const removeSpecification = (index: number) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications.splice(index, 1);
    setSpecifications(updatedSpecifications);
  };

  const handleSpecificationNameChange = (value: string, index: number) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[index].name = value;
    setSpecifications(updatedSpecifications);
  };

  const handleSpecificationValueChange = (value: string, index: number) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[index].value = value;
    setSpecifications(updatedSpecifications);
  };

  const onFinish = async (values: any) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('brand', values.brand);
    formData.append('country_of_origin', values.country_of_origin);
    formData.append('description', values.description);
    formData.append('price', values.price);
    formData.append('quantity', values.quantity);
    formData.append('store', userID);

    if (values.images && values.images.length > 0) {
      formData.append('images', values.images[0].originFileObj);
    }

    formData.append('category', values.category);

    // Создайте массив спецификаций в ожидаемом формате
    const specificationsArray = specifications.map((specification) => ({
      name: specification.name,
      value: specification.value,
    }));

    // Добавьте массив спецификаций в formData
    specificationsArray.forEach((specification, index) => {
      formData.append(`specifications[${index}][name]`, specification.name);
      formData.append(`specifications[${index}][value]`, specification.value);
    });

    try {
      const response = await axiosInstance.post('/api/v1/stores/products/', formData);
      setLoading(false);
      console.log('Product created successfully', response.data);
    } catch (error) {
      setLoading(false);
      console.error('Error creating product:', error);
      console.log(formData);
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <Form form={form} name='createProduct' onFinish={onFinish} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
        <Form.Item label='Category' name='category' rules={[{ required: true, message: 'Please select a category' }]}>
          <Select placeholder='Select a category'>
            {categories.map((category) => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Please enter the product name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Brand' name='brand' rules={[{ required: true, message: 'Please enter the brand' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Country of Origin'
          name='country_of_origin'
          rules={[{ required: true, message: 'Please enter the country of origin' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label='Description' name='description' rules={[{ required: true, message: 'Please enter the description' }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label='Price' name='price' rules={[{ required: true, message: 'Please enter the price' }]}>
          <Input type='number' />
        </Form.Item>
        <Form.Item label='Quantity' name='quantity' rules={[{ required: true, message: 'Please enter the quantity' }]}>
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item label='Images' name='images' rules={[{ required: true, message: 'Please upload an image' }]}>
          <Upload name='images' customRequest={() => {}} showUploadList={false} onChange={handleImageChange}>
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
        {specifications.map((specification, index) => (
          <div key={index}>
            <Input
              placeholder={`Specification ${index + 1} Name`}
              value={specification.name}
              onChange={(e) => handleSpecificationNameChange(e.target.value, index)}
            />
            <Input
              placeholder={`Specification ${index + 1} Value`}
              value={specification.value}
              onChange={(e) => handleSpecificationValueChange(e.target.value, index)}
            />
            <Button type='link' onClick={() => removeSpecification(index)}>
              Remove
            </Button>
          </div>
        ))}
        <Button type='dashed' onClick={addSpecification} style={{ width: '100%' }}>
          Add Specification
        </Button>
        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type='primary' htmlType='submit' loading={loading}>
            Create Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
