import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {

  const products = [
    { id: 1, name_product: 'Упаковка из крафта', price: '150 сом' },
    { id: 2, name_product: 'Пакеты бумажные', price: '200 сом' },
    { id: 3, name_product: 'Кейсы для эскизов', price: '300 сом' },
    { id: 4, name_product: 'Скетчбук Simple', price: '500 сом' }
  ];

  return (
    <section className="products-section">
      <div className="products-grid">
        {products.map((item) => (
          
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;