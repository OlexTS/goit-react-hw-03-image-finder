import ImageGalleryItem from "components/ImageGalleryItem"
import { List } from "./ImageGallery.styled"

const ImageGallery = ({ images}) => {
    return <List>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
       return <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} />
      } 
    )}
</List>
}

export default ImageGallery