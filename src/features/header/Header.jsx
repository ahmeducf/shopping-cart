import { NavLink } from 'react-router-dom';
import { Nav } from './nav';
import { Cart } from './cart';
import { siteHeader, logo } from './Header.module.css';

function Header() {
  return (
    <header aria-label="Site header" className={siteHeader}>
      <NavLink to="/" className={logo}>
        <h1>Fake Store</h1>
      </NavLink>
      <Nav />
      <Cart />
    </header>
  );
}

export default Header;
