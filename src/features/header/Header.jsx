import { NavLink } from 'react-router-dom';
import { Nav } from './nav';
import { Cart } from './cart';
import { siteHeader, logo, cart } from './Header.module.css';

function Header() {
  return (
    <header aria-label="Site header" className={siteHeader}>
      <div className={logo}>
        <NavLink to="/">
          <h1>Fake Store</h1>
        </NavLink>
      </div>
      <Nav />
      <div className={cart}>
        <Cart />
      </div>
    </header>
  );
}

export default Header;
