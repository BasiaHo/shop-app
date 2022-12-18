import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

export const ProductImage = ({ name, color, getShirtName }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={`${getShirtName()}`}
        title={`${getShirtName()}, color: ${color}`}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${color}.jpg`}
      />
    </div>
  );
};

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  getShirtName: PropTypes.func.isRequired,
};

export default ProductImage;
