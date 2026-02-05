import React, { useState } from 'react';
import { Input, Button, message, Space, Typography } from 'antd'; 
import Description from './components/Description';
import Products from './components/Products';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Secundomer from './components/Secundomer';
import Counter from './components/Cunter'; 
import Registration from './components/Registration'; 
import './App.css';

const { Title } = Typography;

function App() {
 
  const [inputValue, setInputValue] = useState('');
  
  const handleShowText = () => {
    if (inputValue.length > 10) {
      message.success('Вы ввели: ' + inputValue);
    } else {
      message.error('Ошибка! Текст должен быть больше 10 символов');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Описание */}
      <Description />
      
      {/* 2. Блок проверки текста (Инпут) */}
      <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderBottom: '1px solid #ddd' }}>
        <Space orientation="vertical" size="middle" style={{ width: '100%', maxWidth: '400px' }}>
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

      
      <Secundomer />

      
      <Counter />

      <Registration />
      <Products />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;