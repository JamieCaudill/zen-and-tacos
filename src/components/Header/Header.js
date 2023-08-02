// Header.js //

import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <img src="logo192.png" alt="logo" className="header__logo" />
      <h1 className="header__text">Zen and the Art of Tacos</h1>
      <NavLink to='/favorites'><button className="header__button">Favorites</button></NavLink>
    </header>
  );
};

export default Header;