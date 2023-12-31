/* eslint-disable no-confusing-arrow */
import { NavLink } from 'react-router-dom';
import { headerNav, navItem, navItemLink, active } from './Nav.module.css';

function Nav() {
  return (
    <nav aria-label="Main navigation" className={headerNav}>
      <ul>
        <li className={navItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${active} ${navItemLink}` : `${navItemLink}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className={navItem}>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? `${active} ${navItemLink}` : `${navItemLink}`
            }
          >
            Products
          </NavLink>
        </li>
        <li className={navItem}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${active} ${navItemLink}` : `${navItemLink}`
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
