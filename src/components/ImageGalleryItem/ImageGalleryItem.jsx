import { Item, Image } from "./ImageGalleryItem.styled";

const  ImageGalleryItem = ({littleImage, bigImage}) => {
         return <Item >
      <Image src={littleImage} alt="" />
    </Item>;
  
}

export default ImageGalleryItem;