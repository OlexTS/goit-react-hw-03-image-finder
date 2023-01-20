import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import fetchImages from 'services/api';
import ImageGallery from './ImageGallery';
import { Container } from './App.styled';
import Button from './Button';
// import Modal from './Modal';

class App extends Component {
  state = {
    query: '',
    largeImageURL: null,
    page: 1,
    images: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const { hits } = await fetchImages(query, page);
      this.setState({ images: [...prevState.images, ...hits] });
    }
  }
  
// fetchImages(this.state.query, this.state.page).then(data => this.setState())
  handleFormSubmit = query => {
    this.setState({ query: query});
  };

  render() {
    return (
      <Container>
        <ToastContainer autoClose={3000}/>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <Button />
        {/* <Modal/> */}
      </Container>
    );
  }
}

export default App;
