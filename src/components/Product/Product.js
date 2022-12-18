import { useState } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ id, name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const toCapitalize = (name) => {
    return name[0].toUpperCase() + name.substr(1).toLowerCase();
  };

  const getShirtName = () => {
    return `${toCapitalize(name)} shirt`;
  };

  const getPrice = () => {
    return basePrice + currentSize.additionalPrice;
  };

  const sendToCart = (e) => {
    e.preventDefault();

    console.log('SUMMARY');
    console.log('=========================');
    console.table({
      Name: getShirtName(),
      Price: getPrice(),
      Size: currentSize.name,
      Color: currentColor,
    });
  };

  return (
    <article className={styles.product}>
      <ProductImage
        name={name}
        color={currentColor}
        getShirtName={getShirtName}
      />
      <ProductForm
        sendToCart={sendToCart}
        getShirtName={getShirtName}
        getPrice={getPrice}
        toCapitalize={toCapitalize}
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Product;
