import { useState } from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import ImageError from "../ImageError/ImageError";

function ImageGallery({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onImgClick = (e) => {
    const { img } = e.target.dataset;
    setModalImg(img);
    toggleModal();
  };

  let imageListContent;

  if (images) {
    imageListContent = (
      <ul className={styles.imageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            largeImageURL={largeImageURL}
            key={id}
            previewImg={webformatURL}
            tags={tags}
            onToggleModal={toggleModal}
            showModal={showModal}
            onImgClick={onImgClick}
            modalImg={modalImg}
          />
        ))}
      </ul>
    );
  } else {
    <ImageError />;
  }

  return <div>{imageListContent}</div>;
}

ImageGallery.propTypes = {
  onImgClick: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;