import { useEffect } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

function Modal({ modalImg, tags, onToggleModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onToggleModal();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onToggleModal();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={modalImg} alt={tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
