import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './OptionColor.module.scss';

export const OptionColor = ({
  colors,
  currentColor,
  setCurrentColor,
  toCapitalize,
}) => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((color) => (
          <li key={`color-${color}`}>
            <button
              type='button'
              onClick={() => setCurrentColor(color)}
              className={clsx(
                styles[`color${toCapitalize(color)}`],
                currentColor === color && styles.active
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  toCapitalize: PropTypes.func.isRequired,
};

export default OptionColor;
