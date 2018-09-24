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
        <h1>{countryInfo.name.common} </h1>
        <hr />
        <table>
          <tr>
            <td>capital:</td>
            <td>{countryInfo.capital}</td>
          </tr>
        </table>

        <tr>
          <td>Area:</td>
          <td>
            {countryInfo.area}
            Km2
          </td>
        </tr>

        <tr>
          <td>Borders:</td>

          <td>
            {countryInfo.borders.length > 0 ? (
              <div>
                <ul>
                  {countryInfo.borders.map(border => (
                    <li key={border}>
                      <Link to={border}>
                        {
                          countries.find(country => country.cca3 === border)
                            .name.common
                        }
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </td>
        </tr>
        {/* <details>
          <pre>{JSON.stringify(countryInfo, null, 2)}</pre>
        </details> */}
      </div>
    );
  }
}

export default CountryDetail;
