import styles from './Header.module.css';

import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';
import map from '../../images/map.svg';

function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.top}>
          <ul>
            <li>
              <a href="/contacts">Contacts Sales</a>
            </li>
            <li>
              <a href="tel:646-791-3726">646-791-3726</a>
            </li>
            <li>
              <select>
                <option>US</option>
                <option>UK</option>
              </select>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <a href="/contacts">
            <img src={logo} alt="logo"></img>
          </a>
          <nav>
            <ul>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/explore">Explore</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
            </ul>
          </nav>
          <ul>
            <li>
              <a href="/showrooms">
                <img src={map} alt="map"></img>
                Showrooms
              </a>
            </li>
            <li>
              <button>
                <img src={cart} alt="cart"></img>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
