import { Component } from "react";
import { ModalWindow, Overlay} from "./Modal.styled";

class Modal extends Component {

  componentDidMount() {
  window.addEventListener('keydown', this.onCloseByEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEscape)
  }

  onCloseByEscape = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose()
    }
  }
    render() {
    const { largeImageURL, onClose, tags} = this.props
    return <Overlay onClick={onClose}>
  <ModalWindow >
    <img src={largeImageURL} alt={tags} />
  </ModalWindow>
</Overlay>}
    
}

export default Modal;