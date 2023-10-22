import { ImageGalleryItemList } from "./ImageGalleryItem.styled";
import ModalWindow from "../Modal/Modal";
import { Component } from "react";
export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
    selectedPhoto: null,
  };

  onImageOpen = (e) => {
    this.setState({ modalIsOpen: true });
    if (this.state.modalIsOpen) {
      return;
    }

    const imageId = e.target.getAttribute("data-id");

    const selectedPhotos = this.props.photos.find(
      (photo) => photo.id === Number(imageId)
    );
    this.setState({ selectedPhoto: selectedPhotos.largeImageURL });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { selectedPhoto, modalIsOpen } = this.state;
    const { photos } = this.props;
    return photos.map(({ id, webformatURL }) => {
      return (
        <ImageGalleryItemList onClick={this.onImageOpen} key={id}>
          <img src={webformatURL} alt="" data-id={id} />
          <ModalWindow
            modalOpen={modalIsOpen}
            modalClose={this.closeModal}
            photo={selectedPhoto}
          />
        </ImageGalleryItemList>
      );
    });
  }
}
