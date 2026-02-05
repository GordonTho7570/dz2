import React, { useState } from 'react';
import { Button, Space, Typography, message } from 'antd';

const { Title } = Typography;

const Counter = () => {
  const [count, setCount] = useState(0);

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
    <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#ffffff' }}>
      <Space orientation="vertical" size="large">
        <Title level={4}>Счетчик</Title>
        <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#7a7aff' }}>{count}</div>
        <Space>
          <Button type="primary" onClick={handleIncrement} style={{ background: '#52c41a' }}>+5</Button>
          <Button type="primary" onClick={handleDecrement} danger>-5</Button>
          <Button onClick={handleReset}>Обнулить</Button>
        </Space>
      </Space>
    </div>
  );
};

export default Counter;