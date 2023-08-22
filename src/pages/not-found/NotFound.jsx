import { Link } from 'react-router-dom';
import { notFound, ops, heading, description } from './NotFound.module.css';

function NotFound() {
  return (
    <main className={notFound} role="main">
      <div className={ops}>Ooops!</div>
      <h1 className={heading}>Error 404: Page not found</h1>
      <p className={description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  );
}

export default NotFound;
