import { useState } from "react";
import ShowModal from "./ShowModal";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button className="model-btn" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      {showModal && <ShowModal closeModal={closeModal} />}
    </>
  );
};
export default Modal;
