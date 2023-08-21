import { faBagShopping, faLightbulb, faShirt, faStar } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categoryList, listItem, btn, iconWrapper, name } from './CategoryList.module.css';

function CategoryList() {
  const categories = [
    { id: 1, name: 'All', icon: faStar },
    { id: 3, name: 'Electronics', icon: faLightbulb },
    { id: 2, name: 'Jewelry', icon: faGem },
    { id: 4, name: "Men's clothing", icon: faShirt },
    { id: 5, name: "Women's clothing", icon: faBagShopping },
  ];

  return (
    <ul className={categoryList}>
      {categories.map((category) => (
        <li key={category.id} className={listItem}>
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

export default CategoryList;
