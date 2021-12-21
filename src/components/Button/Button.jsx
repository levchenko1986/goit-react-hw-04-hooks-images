import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ onLoadMore }) {
  return (
  <div className={styles.btnWrapper}>
    <button type="button" className={styles.Button} onClick={() => onLoadMore()}>
      Load more
    </button>
  </div>

  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
