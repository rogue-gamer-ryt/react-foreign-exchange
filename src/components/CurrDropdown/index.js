import React from "react";
import "./CurrDropdown.css";
import { getDate } from "../../utility";

export default function CurrDropdown(props) {
  const getOptions = () => {
    console.log("Calling getOptions: ", props);
    var options = [];
    if (props.result && Object.keys(props.result.rates)) {
      var currencies = props.result.rates;
      for (let key in currencies) {
        options.push(
          <option key={key} value={key}>
            {key}
          </option>
        );
      }
    } else options = null;

    return options;
  };

  const setCurrency = e => {
    e.preventDefault();
    props.setCurrency(e.target.value);
    if (props.date) {
      var date = getDate(props.date);
    }
    props.fetchCurrRatesOld(e.target.value, date);
  };

  return (
    <div className="dropDown">
      <select
        className="dropbtn"
        value={props.selectedCurrency}
        onChange={setCurrency}
      >
        {getOptions()}
      </select>
    </div>
  );
}
