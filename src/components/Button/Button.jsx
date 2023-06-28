import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button onClick={onClick} className={css.button} type="button">
    Load more
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};