import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';


export const ProductForm = ({
  sendToCart,
  getShirtName,
  calculatedPrice,
  toCapitalize,
  sizes,
  currentSize,
  setCurrentSize,
  colors,
  currentColor,
  setCurrentColor,
}) => {
  return (
    <div>
      <header>
        <h2 className={styles.name}>{getShirtName()}</h2>
        <span className={styles.price}>Price: ${calculatedPrice}</span>
      </header>
      <form onSubmit={sendToCart}>
        <OptionSize
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
        <OptionColor
          colors={colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          toCapitalize={toCapitalize}
        />
        <Button className={styles.button}>
          <span className='fa fa-shopping-cart' />
        </Button>
      </form>
    </div>
  );
};

ProductForm.propTypes = {
  sendToCart: PropTypes.func.isRequired,
  getShirtName: PropTypes.func.isRequired,
  calculatedPrice: PropTypes.number.isRequired,
  toCapitalize: PropTypes.func.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  currentSize: PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired,
  }).isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;
