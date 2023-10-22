import { ImageGalleryItemList } from "./ImageGalleryItem.styled";
import ModalWindow from "../Modal/Modal";
import { useState } from "react";

export default function ImageGalleryItem({ photos }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function onImageOpen(e) {
    setModalIsOpen(true);
    if (modalIsOpen) {
      return;
    }

    const imageId = e.target.getAttribute("data-id");

    const selectedPhotos = photos.find((photo) => photo.id === Number(imageId));
    setSelectedPhoto(selectedPhotos.largeImageURL);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return photos.map(({ id, webformatURL }) => {
    return (
      <ImageGalleryItemList onClick={onImageOpen} key={id}>
        <img src={webformatURL} alt="" data-id={id} />
        <ModalWindow
          modalOpen={modalIsOpen}
          modalClose={closeModal}
          photo={selectedPhoto}
        />
      </ImageGalleryItemList>
    );
  });
}
