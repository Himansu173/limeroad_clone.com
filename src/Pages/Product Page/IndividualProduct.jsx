import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import styles from "./IndividualProduct.module.css";

const IndividualProduct = ({
  id,
  image,
  price,
  before_disc,
  brand,
  offer_percent,
}) => {
  return (
    <NavLink to={`/products/${id}`}>
      <div className={styles.singleProductContainer}>
        <div>
          <img src={image[0]} alt="product-image" />
        </div>
        <div className={styles.priceSection}>
          <span className={styles.price}>₹ {price}</span>
          <span className={styles.before_disc}>
            <s>₹{before_disc}</s>
          </span>
          <span className={styles.offer_percent}>{offer_percent}% off</span>
        </div>
        <p className={styles.brand}>By {brand}</p>
      </div>
    </NavLink>
  );
};

export default IndividualProduct;

IndividualProduct.propTypes = {
  id: PropTypes.any,
  image: PropTypes.any,
  price: PropTypes.number,
  before_disc: PropTypes.number,
  brand: PropTypes.string,
  offer_percent: PropTypes.number
}