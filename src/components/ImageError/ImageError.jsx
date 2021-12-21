import PropTypes from "prop-types";
import styles from "./ImageError.module.css";

function ImageError({ message }) {
  return (
    <div role="alert" className={styles.alertWrapper}>
      <p className={styles.Message}>There are no {message} images!</p>
    </div>
  );
}

ImageError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ImageError;