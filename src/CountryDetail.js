import React, { Component } from "react";
import countries from "./countries.json";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    const countryInfo = countries.find(
      country => country.cca3 === this.props.id
    );

    return (
      <div>
        <h1>Hello this is {countryInfo.name.common} </h1>
        <hr />
        <p>Captial: {countryInfo.capital}</p>
        <hr />
        <p>
          Area: {countryInfo.area}
          Km2
        </p>
        <hr />
        {countryInfo.borders.length > 0 ? (
          <div>
            Borders:
            <ul>
              {countryInfo.borders.map(border => (
                <li key={border}>
                  <Link to={border}>
                    {
                      countries.find(country => country.cca3 === border).name
                        .common
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {/* <details>
          <pre>{JSON.stringify(countryInfo, null, 2)}</pre>
        </details> */}
      </div>
    );
  }
}

export default CountryDetail;
