import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryMenu } from "./ImageGallery.styled";

export default function ImageGallery({ photos }) {
  return (
    <ImageGalleryMenu>
      <ImageGalleryItem photos={photos} />
    </ImageGalleryMenu>
  );
}
