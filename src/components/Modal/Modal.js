import { ModalDivOverlay, ModalDivModal, ModalImage } from "./Modal.styled";
import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

Modal.setAppElement("#root");

export default function ModalWindow({ modalOpen, modalClose, photo }) {
  return (
    <Modal
      onRequestClose={modalClose}
      isOpen={modalOpen}
      contentLabel="Example Modal"
    >
      <ModalDivOverlay>
        <ModalDivModal>
          <ModalImage src={photo} alt="" />
        </ModalDivModal>
      </ModalDivOverlay>
    </Modal>
  );
}
