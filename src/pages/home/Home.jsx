import { Link } from 'react-router-dom';
import {
  container,
  textContainer,
  heading,
  text,
  shopNowBtn,
} from './Home.module.css';

function Home() {
  return (
    <main className={container}>
      <div className={textContainer}>
        <h1 className={heading}>Welcome to Fake Store!</h1>
        <p className={text}>
          Fake Store is your one-stop destination for fashion-forward clothing
          and exquisite jewelry for both men and women. Step into a world of
          endless possibilities and let us redefine your shopping journey.
        </p>
        <Link className={shopNowBtn} to="/products">
          Shop Now
        </Link>
      </div>
    </main>
  );
}

export default Home;
