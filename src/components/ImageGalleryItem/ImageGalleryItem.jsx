import Modal from 'components/Modal';
import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <Item onClick={this.handleToggleModal}>
        <Image src={webformatURL} alt={tags} />
        
        </Item>{(isModalOpen) && <Modal largeImageURL={largeImageURL} onClose={this.handleToggleModal} tags={tags} />}</>
      
      
    );
  }
}

export default ImageGalleryItem;
