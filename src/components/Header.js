import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/marvellogo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faSearch);

const Header = ({ search, setSearch }) => {
  return (
    <div>
      <nav>
        <div className="header-container">
          <Link to="/">
            <div>
              <img
                className="header-logo"
                src={Logo}
                alt="Marvel Logo, white letter on red background"
              />
            </div>
          </Link>
          <div className="search-cont">
            <input
              type="text"
              placeholder="Search for the character you want !"
              className="search-input"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <div className="search-icon">
              <FontAwesomeIcon icon="search" />
            </div>
          </div>
          <div>
            <Link to="/">
              <button className="header-button button-char-fav-comics">
                Characters
              </button>
            </Link>
            <Link to="/comics">
              <button className="header-button button-char-fav-comics">
                Comics
              </button>
            </Link>
            <Link to="/favourites">
              <button className="header-button button-char-fav-comics">
                Favourites
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
