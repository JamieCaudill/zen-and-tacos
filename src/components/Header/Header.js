// Header.js //

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="logo192.png" alt="logo" className="header__logo" />
      <h1>Zen and the Art of Tacos</h1>
      <button className="header__button">Favorites</button>
    </header>
  );
};

export default Header;