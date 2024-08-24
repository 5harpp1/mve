import React from 'react';
import products from '../data/productsData';
import '../styles/productList.css'; 

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} className="product__image" />
          <h3 className="product__name">{product.name}</h3>
          <p className="product__description">{product.description}</p>
          <p className="product__price">{product.price} руб.</p>
          <button className="product__button" onClick={() => onAddToCart(product)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;