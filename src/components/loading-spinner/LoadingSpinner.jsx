import { loadingSpinner, spinner } from './LoadingSpinner.module.css';

function LoadingSpinner() {
  return (
    <div className={loadingSpinner}>
      <div className={spinner}>
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
    </div>
  );
}

export default LoadingSpinner;
