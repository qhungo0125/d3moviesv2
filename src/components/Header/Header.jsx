import React from 'react';
import './Header.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchContent, setContent] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const navi = useNavigate();
  return (
    <div className="header__container">
      <div className="header__search">
        <Link to="/" className="header__icon">
          <img style={{ width: '1.2rem' }} src="/vite.svg" alt="D3Movies" />
          <p>D3Movies</p>
        </Link>

        <div className="searchinput">
          <div
            onClick={(e) => {
              searchContent ? navi(`/search/${searchContent}`) : navi('/');
            }}
            className="search__icon"
          >
            <FaSearch />
          </div>
          <input
            onKeyDown={(e) => [
              e.key === 'Enter' && navi(`/search/${searchContent}`),
            ]}
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Search movies..."
          />
        </div>
        <div className="nav__icon">
          {showNav ? (
            <GrClose
              onClick={(e) => {
                setShowNav(!showNav);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                setShowNav(!showNav);
              }}
            />
          )}
        </div>
      </div>
      <nav className={showNav ? 'header__nav active' : 'header__nav'}>
        <Link
          className="nav__link"
          onClick={(e) => {
            showNav && setShowNav(false);
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          className="nav__link"
          onClick={(e) => {
            showNav && setShowNav(false);
          }}
          to="/popular"
        >
          Popular
        </Link>
        <Link
          className="nav__link"
          onClick={(e) => {
            showNav && setShowNav(false);
          }}
          to="/upcoming"
        >
          upcoming
        </Link>
        <Link
          className="nav__link"
          onClick={(e) => {
            showNav && setShowNav(false);
          }}
          to="/toprated"
        >
          top rated
        </Link>
      </nav>
    </div>
  );
};

export default Header;
