import { container, textContainer, heading, text } from './Home.module.css';
import { ShopNowButton } from 'components';

function Home() {
  return (
    <main className={container}>
      <div className={textContainer}>
        <h2 className={heading}>Welcome to Fake Store!</h2>
        <p className={text}>
          Fake Store is your one-stop destination for fashion-forward clothing
          and exquisite jewelry for both men and women. Step into a world of
          endless possibilities and let us redefine your shopping journey.
        </p>
        <ShopNowButton />
      </div>
    </main>
  );
}

export default Home;
