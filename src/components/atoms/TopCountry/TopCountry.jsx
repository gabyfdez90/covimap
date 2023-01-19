import React from "react";
import ConsumoApi from "../../../services/ConsumoApi";
import { Table } from "react-bootstrap";

function TopCountry() {
  const data = ConsumoApi(); //.sort((a, b) => b.cases - a.cases);
  console.log(data);
  return (
    <div className="tableContainer">
      <div className="titleTable">
        <p>Data Table - Covid-19 Country Top 10</p>
      </div>

      <Table striped hover className="infoTable">
        <thead>
          <tr>
            <th>Flag </th>
            <th>Cases</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((country) => (
            <tr key={country.country}>
              <td>
                <img
                  src={country.countryInfo.flag}
                  alt="flag"
                  className="flagImg"
                ></img>
              </td>

              <td>{country.cases}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TopCountry;
