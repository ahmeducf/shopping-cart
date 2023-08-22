import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteButton } from './DeleteButton.module.css';

function DeleteButton({ onClick }) {
  return (
    <button type="button" className={deleteButton} onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} />
      <span>Delete</span>
    </button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
