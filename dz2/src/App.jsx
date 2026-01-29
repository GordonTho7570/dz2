import React, { useState } from 'react';
import { Input, Button, message, Space, Typography } from 'antd'; 
import Description from './components/Description';
import Products from './components/Products';
import Partners from './components/Partners';
import Footer from './components/Footer';
import './App.css';

const { Title } = Typography;

function App() {
 
  const [inputValue, setInputValue] = useState('');
  
  
  const [count, setCount] = useState(0);

 
  const handleShowText = () => {
    if (inputValue.length > 10) {
      message.success('Вы ввели: ' + inputValue);
    } else {
      message.error('Ошибка! Текст должен быть больше 10 символов');
    }
  };

 
  const handleIncrement = () => {
    if (count + 5 <= 15) {
      setCount(count + 5);
    } else {
      message.warning('Максимум 15!');
    }
  };

  const handleDecrement = () => {
    if (count - 5 >= 0) {
      setCount(count - 5);
    } else {
      message.warning('Минимум 0!');
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-white">
   
      <Description />
      
    
      <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderBottom: '1px solid #ddd' }}>
        <Space direction="vertical" size="middle" style={{ width: '100%', maxWidth: '400px' }}>
          
          <Input 
            placeholder="Введите текст (минимум 11 символов)" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button 
            type="primary" 
            onClick={handleShowText} 
            style={{ backgroundColor: '#7a7aff', borderColor: '#7a7aff' }}
          >
            Проверить текст
          </Button>
        </Space>
      </div>

      
      <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <Space direction="vertical" size="large">
          <Title level={4}>Счетчик</Title>
          <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#7a7aff' }}>{count}</div>
          <Space>
            <Button type="primary" onClick={handleIncrement} style={{ background: '#52c41a' }}>+5</Button>
            <Button type="primary" onClick={handleDecrement} danger>-5</Button>
            <Button onClick={handleReset}>Обнулить</Button>
          </Space>
        </Space>
      </div>

      
      <Products />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;