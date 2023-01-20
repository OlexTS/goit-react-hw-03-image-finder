import ImageGalleryItem from "components/ImageGalleryItem"
import { List } from "./ImageGallery.styled"

const ImageGallery = ({ images}) => {
    return <List>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem key={id} littleImage={webformatURL} bigImage={largeImageURL} />
      } 
    )}
</List>
}

export default ImageGallery