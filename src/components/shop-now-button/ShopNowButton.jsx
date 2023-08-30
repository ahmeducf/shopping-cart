import { Link } from 'react-router-dom';
import { shopNowBtn } from './ShopNowButton.module.css';
function ShopNowButton() {
  return (
    <Link className={shopNowBtn} to="/shopping-cart/products">
      Shop Now
    </Link>
  );
}

export default ShopNowButton;
