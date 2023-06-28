import { Rings } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.loader}>
    <Rings color="royalblue" height="100" width="100" />
  </div>
);

export default Loader;