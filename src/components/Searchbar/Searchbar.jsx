import { Component } from 'react';
import css from './Searchbar.module.css';
import { CiSearch } from 'react-icons/ci';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handledInputChange = e => {
    this.setState({
      inputValue: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.catchSubmitInfo(this.state.inputValue);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className="Form" onSubmit={this.handleSubmit}>
          <div className={css.wrap}>
            <button type="submit" className={css.buttonIcon}>
              <CiSearch name="search" color="#fff" size="25px" />
            </button>

            <input
              onChange={this.handledInputChange}
              value={this.state.inputValue}
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </div>
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  catchSubmitInfo: PropTypes.func.isRequired,
};