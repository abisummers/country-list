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
        <h2>{countryInfo.name.common} </h2>

        <table>
          <tbody>
            <tr>
              <td>capital:</td>
              <td>{countryInfo.capital}</td>
            </tr>

            <tr>
              <td>Area:</td>
              <td>
                {countryInfo.area}
                km 2
              </td>
            </tr>

            <tr>
              <td>Borders:</td>

              <td>
                {countryInfo.borders.length > 0 ? (
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
                ) : (
                  "no borders"
                )}
              </td>
            </tr>
          </tbody>
        </table>
        {/* <details>
          <pre>{JSON.stringify(countryInfo, null, 2)}</pre>
        </details> */}
      </div>
    );
  }
}

export default CountryDetail;
