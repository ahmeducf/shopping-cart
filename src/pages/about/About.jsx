import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  about,
  container,
  content,
  wrapper,
  linksWrapper,
} from './About.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <main role="main" className={about}>
      <div className={container}>
        <p className={content}>
          This is a fictional store and none of the products displayed here
          exist. You can not buy anything here. This is just a demo application.
        </p>
        <p className={content}>
          This application is built using React, React Router. It uses the Fake
          Store API to fetch products and categories.
        </p>
      </div>

      <div className={linksWrapper}>
        <a href="https://github.com/ahmeducf" className={wrapper}>
          <FontAwesomeIcon icon={faGithub} />
          <span>ahmeducf</span>
        </a>

        <a href="https://fakestoreapi.com/" className={wrapper}>
          <FontAwesomeIcon icon={faStore} />
          <span>Fake Store API</span>
        </a>
      </div>
    </main>
  );
}

export default About;
