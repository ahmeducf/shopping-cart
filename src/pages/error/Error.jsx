import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { errorPage, ops, heading, description } from './Error.module.css';

function Error({ error }) {
  return (
    <main className={errorPage} role="main">
      <div className={ops}>Ooops!</div>
      <h1 className={heading}>
        {error ? error.message : '404 - Page Not Found'}
      </h1>
      <p className={description}>
        {error
          ? 'Sorry, an error has occurred. Please try again later.'
          : 'Sorry, the page you are looking for does not exist.'}
      </p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  );
}

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default Error;
