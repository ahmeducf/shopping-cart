import PropTypes from 'prop-types';
import {
  faBagShopping,
  faLightbulb,
  faShirt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  categoryList,
  listItem,
  btn,
  iconWrapper,
  name,
  active,
} from './CategoryList.module.css';

function CategoryList({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { id: 1, name: 'All', icon: faStar },
    { id: 2, name: 'Electronics', icon: faLightbulb },
    { id: 3, name: "Men's clothing", icon: faShirt },
    { id: 4, name: "Women's clothing", icon: faBagShopping },
  ];

  const handleClick = (e) => {
    const { category } = e.currentTarget.dataset;
    setSelectedCategory(category);
  };

  return (
    <ul className={categoryList}>
      {categories.map((category) => (
        <li
          data-category={category.name.toLowerCase()}
          key={category.id}
          className={`${listItem} ${
            selectedCategory === category.name.toLowerCase() ? active : ''
          }`}
          onClick={handleClick}
        >
          <button type="button" className={btn}>
            <span className={iconWrapper}>
              <FontAwesomeIcon icon={category.icon} />
            </span>
            <span className={name}>{category.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

CategoryList.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default CategoryList;
