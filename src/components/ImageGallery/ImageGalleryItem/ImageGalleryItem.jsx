import styles from "./ImageGalleryItem.module.css";
import Modal from "../../Modal/Modal";
import PropTypes from "prop-types";

function ImageGalleryItem({
  id,
  previewImg,
  tags,
  onToggleModal,
  showModal,
  modalImg,
  onImgClick,
  largeImageURL,
}) {
  return (
    <>
      <li className={styles.imageGalleryItem} key={id}>
        <img
          data-img={largeImageURL}
          src={previewImg}
          alt={tags}
          className={styles.imageGalleryItemImage}
          onClick={onImgClick}
        />
      </li>

      {showModal && (
        <Modal modalImg={modalImg} onToggleModal={onToggleModal} tags={tags} />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  previewImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  modalImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
