import { Component } from 'react';
import PixabayApi from '../Services/PixabayApi';
import Modal from './Modal';
import Button from './Button';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import css from './App.module.css';

export class App extends Component {
  state = {
    items: [],
    isLoading: false,
    error: null,
    request: null,
    page: 1,
    pages: 0,
    alt: '',
    url: '',
  };

  count = 0;

  componentDidUpdate(_, prevState) {
    const { request, page } = this.state;
    if (prevState.request !== request || prevState.page !== page) {
      this.fetchPhotosGallery(request, page);
    }
    if (page > 1) {
      window.scrollBy({
        top: window.innerHeight - 140,
        behavior: 'smooth',
      });
    }
  }

  handleFormSubmit = query => {
    if (!query.trim() || this.state.request === query) return;
    this.setState({
      request: query,
      page: 1,
      items: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (url, alt) => {
    this.setState({
      url: url,
      alt: alt,
    });
  };
  closeModal = () => {
    this.setState({
      url: '',
    });
  };

  fetchPhotosGallery = async (request, page) => {
    this.setState({
      isLoading: true,
    });

    try {
      const { total, totalHits, hits } = await PixabayApi.getGallery(
        request,
        page
      );

      this.setState(({ items }) => ({
        items: [...items, ...hits],
        pages: total / totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    const { items, page, pages, isLoading, url, alt } = this.state;
    console.log('Render N=', ++this.count);
    return (
      <div className={css.app}>
        <Searchbar catchSubmitInfo={this.handleFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery hits={items} onItemClick={this.openModal} />
        {pages > page && <Button onClick={this.handleLoadMore} />}
        {url && (
          <Modal close={this.closeModal}>
            <img src={url} alt={alt} />
          </Modal>
        )}
      </div>
    );
  }
}