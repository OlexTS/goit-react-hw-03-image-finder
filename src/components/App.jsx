import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from './Searchbar';
import fetchImages from 'services/api';
import ImageGallery from './ImageGallery';
import { Container } from './App.styled';
import Button from './Button';
import Loader from './Loader';
// import Modal from './Modal';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalImages: 0,
    isloading: false,
    error: null,
  };

  loadNextPage = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, images, totalImages } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isloading: true, error: null });
        const response = await fetchImages(query, page, totalImages);
        this.setState(({ images: page===1? [...response.hits]:[...images, ...response.hits], totalImages: response.totalHits }));
      } catch (error) {
        this.setState({
          error: toast.error('Something wrong, please try again'),
        });
      } finally {
        this.setState({ isloading: false });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({ query: query, page: 1, images: [] });
  };

  render() {
    const { isloading,  images, totalImages} = this.state;
    return (
      <Container>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery images={this.state.images} />
        {isloading && <Loader />}
        {images.length !== 0 && images.length<totalImages && <Button onLoadMore={this.loadNextPage} />}
        
        {/* <Modal/> */}
      </Container>
    );
  }
}

export default App;
