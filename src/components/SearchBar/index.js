import React, { createRef } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const searchRef = createRef();
  const handleSearchChange = e => {
    let rows = [];
    searchRef.current.value = e.target.value;
    if (e.target.value.length > 0) {
      props.copyAllData.forEach(row => {
        if (row.currencyName.search(e.target.value) > -1) {
          rows.push(row);
        }
      });
      props.setAllData(rows);
    } else parseObjectToArray(props.selectedCurrency);
  };

  const parseObjectToArray = selectedCurrency => {
    var rates = props.result.rates;
    var temp = [];
    for (const [key, value] of Object.entries(rates)) {
      if (key !== selectedCurrency)
        temp.push({ currencyName: key, currencyValue: value });
    }
    props.setTotalCount(temp.length);
    props.setAllData(temp);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        ref={searchRef}
        onChange={handleSearchChange}
        className="search-text-input"
        placeholder="Search by currency...."
      />
      <i className="fas fa-search" />
    </div>
  );
}
