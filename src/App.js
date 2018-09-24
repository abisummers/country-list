import React, { Component } from "react";
import "./App.css";
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";
import { NavLink, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>WIKI COUNTRIES</h1>
        </header>

        <div className="main">
          <div className="country-list">
            <ul>
              {countries.map(country => (
                <li key={country.cca3} className="scroll-bar">
                  {country.flag}
                  <NavLink to={`/${country.cca3}`}>
                    {country.name.common}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="country-info">
            <Route path="/:cca3">
              {({ match }) => (
                <CountryDetail
                  // props to send data to a child
                  id={match.params.cca3}
                />
              )}
            </Route>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
