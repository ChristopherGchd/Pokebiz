import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@components/SearchBar";
import "./navbar.css";

function Navbar({ setPage, pokemons }) {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const goToOneProduct = (pokemonInput) => {
    setPage({ path: "OneProduct", id: pokemonInput.pokedex_index - 1 });
    setDisplaySearchBar(!displaySearchBar);
  };
  return (
    <div>
      {/* SEARCH BAR MOBILE */}
      <div className={displaySearchBar ? "d-none" : "d-block"}>
        <SearchBar
          pokemons={pokemons}
          setPage={setPage}
          goToOneProduct={goToOneProduct}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div>
        {/* NAVBAR - MOBILE */}
        <div className="navbar-mobile fixed-bottom container-md d-md-none">
          <nav className="p-3">
            <ul className="list-unstyled d-flex justify-content-around m-0">
              {/* LOGO */}
              <Link to="/">
                <button
                  className="border border-0 bg-transparent"
                  type="button"
                >
                  <img
                    className="navbar-icon"
                    src="./src/assets/navbar-icons/logo-black.png"
                    alt="logo-icon"
                  />
                </button>
              </Link>
              {/* ALL PRODUCT BUTTON */}
              <Link to="/AllProducts">
                <button
                  className="border border-0 bg-transparent"
                  type="button"
                >
                  <img
                    className="navbar-icon"
                    src="./src/assets/navbar-icons/cards.png"
                    alt="store-icon"
                  />
                </button>
              </Link>
              {/* SEARCH BUTTON */}
              <button
                onClick={() => setDisplaySearchBar(!displaySearchBar)}
                className="border border-0 bg-transparent"
                type="button"
              >
                <img
                  className="navbar-icon"
                  src="./src/assets/navbar-icons/search-black.png"
                  alt="search-icon"
                />
              </button>
              {/* BASKET BUTTON */}
              <button className="border border-0 bg-transparent" type="button">
                <img
                  className="navbar-icon"
                  src="./src/assets/navbar-icons/basket-black.png"
                  alt="basket-icon"
                />
              </button>
            </ul>
          </nav>
        </div>
        {/* ------ NAVBAR DESKTOP ------- */}
        <div className="navbar-desktop fixed-top d-none d-md-block container-fluid">
          <nav className="p-3">
            <ul className="list-unstyled d-flex justify-content-between m-0">
              {/* LOGO */}
              <Link to="/">
                <button
                  className="navbar-button border border-0 bg-transparent"
                  type="button"
                >
                  <div className="d-flex">
                    <img
                      className="navbar-icon"
                      src="./src/assets/navbar-icons/logo.png"
                      alt="logo-icon"
                    />
                    <h2 className="ms-2">Pokebiz</h2>
                  </div>
                </button>
              </Link>
              {/* ALL PRODUCTS BUTTON */}
              <Link to="/AllProducts">
                <button
                  className="border border-0 bg-transparent"
                  type="button"
                >
                  <div className="navbar-desktop-store-icon d-flex align-items-center">
                    <img
                      className="navbar-icon"
                      src="./src/assets/navbar-icons/cards-orange.png"
                      alt="store-icon"
                    />
                    <p className="m-0 ms-2 fs-6">Our cards</p>
                  </div>
                </button>
              </Link>
              <div className="navbar-desktop-right-icon d-flex justify-content-around">
                {/* SEARCH BAR */}
                <form action="">
                  <label className="d-flex bg-dark rounded-3 px-3 py-1">
                    <input
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="pokebiz-seachBar-Desktop text-white"
                      type="text"
                      placeholder="Find your Pokemon"
                    />
                    <button
                      className="border border-0 bg-transparent"
                      type="button"
                    >
                      <img
                        className="navbar-icon"
                        src="./src/assets/navbar-icons/search-orange.png"
                        alt="search-icon"
                      />
                    </button>
                  </label>
                  <div
                    className={
                      !searchValue
                        ? "d-none"
                        : "pokebiz-searchBar-output-container d-flex flex-column align-items-start container-fluid h-50 mt-3 position-absolute overflow-auto"
                    }
                  >
                    {pokemons
                      .filter((pokemon) =>
                        pokemon.name.toLowerCase().includes(searchValue)
                      )
                      .map((pokemon) => {
                        return (
                          <Link to={`/AllProducts/${pokemon.pokedex_index}`}>
                            <button
                              type="button"
                              className="pokebiz-searchBar-output text-white bg-transparent fs-5"
                              onClick={() => goToOneProduct(pokemon)}
                            >
                              {pokemon.name}
                            </button>
                          </Link>
                        );
                      })}
                  </div>
                </form>
                {/* BASKET BUTTON */}
                <button
                  className="border border-0 bg-transparent"
                  type="button"
                >
                  <img
                    className="navbar-icon ms-4"
                    src="./src/assets/navbar-icons/basket-orange.png"
                    alt="basket-icon"
                  />
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
