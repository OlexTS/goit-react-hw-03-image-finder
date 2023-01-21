// import Modal from "components/Modal";
import { Item, Image } from "./ImageGalleryItem.styled";

const  ImageGalleryItem = ({littleImage, bigImage}) => {
         return <Item >
      <Image src={littleImage} alt="" />
    </Item>;
  // <Modal></Modal>
}

export default ImageGalleryItem;