import React from "react";
import { connect } from "react-redux";
import { fetchCurrRates, fetchCurrRatesOld } from "../../actions/simpleAction";
import Pagination from "../Pagination/index";
import "./CurrTable.css";
import {
  setTotalCount,
  setPageNo,
  setCurrentData,
  setAllData,
  setCopyAllData
} from "../../actions/paginationAction";

class CurrTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (
      this.props.currData.result &&
      Object.keys(this.props.currData.result.rates).length > 0
    )
      this.parseObjectToArray(this.props.paginationData.selectedCurrency);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.paginationData.selectedCurrency !==
        this.props.paginationData.selectedCurrency ||
      prevProps.currData.result !== this.props.currData.result
    )
      this.parseObjectToArray(this.props.paginationData.selectedCurrency);
    if (
      prevProps.paginationData.allData !== this.props.paginationData.allData ||
      prevProps.paginationData.currPageNum !==
        this.props.paginationData.currPageNum
    )
      this.setTableData(this.props.paginationData.currPageNum);
  }

  parseObjectToArray(selectedCurrency) {
    var rates = this.props.currData.result.rates;
    var temp = [];
    for (const [key, value] of Object.entries(rates)) {
      if (key !== selectedCurrency)
        temp.push({ currencyName: key, currencyValue: value });
    }
    this.props.setTotalCount(temp.length);
    this.props.setAllData(temp);
    this.props.setCopyAllData(temp);
  }

  handlePageChange = pageNo => {
    this.props.setPageNo(pageNo);
  };

  setTableData = pageNumber => {
    console.log("setTableData: ", pageNumber);
    let rows = [];
    let tempArray = [...this.props.paginationData.allData];
    let ul = pageNumber * this.props.paginationData.countPerPage;
    let ll = (pageNumber - 1) * this.props.paginationData.countPerPage;
    if (ul < tempArray.length) {
      rows = tempArray.slice(ll, ul);
    } else if (ul >= tempArray.length) {
      rows = tempArray.slice(ll);
    }
    this.props.setCurrentData(rows);
    console.log("Printing props in setTableData: ", this.props);
  };

  tableGenerator = () => {
    console.log("tableGenerator");
    console.log(this.props.currData);
    var rows = [];
    if (
      this.props.paginationData.currPageData.length > 0 &&
      this.props.currData.resultOldData
    ) {
      var base = this.props.currData.result.base;
      var rates = this.props.paginationData.currPageData;
      var oldRates = this.props.currData.resultOldData.rates;
      oldRates = oldRates[Object.keys(oldRates)[0]];
      console.log("rates " + rates + "base " + base);
      rates.forEach(rate => {
        rows.push(
          <div key={rate.currencyName} className="tableRow">
            <span className="currName">{rate.currencyName}</span>
            <span className="currRate">{rate.currencyValue.toFixed(5)}</span>
            <span className="curr-diff">
              {rate.currencyValue - oldRates[rate.currencyName] > 0
                ? "+" +
                  (rate.currencyValue - oldRates[rate.currencyName]).toFixed(5)
                : +(rate.currencyValue - oldRates[rate.currencyName]).toFixed(
                    5
                  )}
            </span>
          </div>
        );
      });
    } else
      rows = (
        <div className="tableRow">
          <span className="currName">No Data</span>
        </div>
      );
    return rows;
  };

  render() {
    console.log("Props: ", this.props);

    return (
      <div>
        <div className="table-container">{this.tableGenerator()}</div>
        <div>
          <Pagination
            totalCount={this.props.paginationData.allData.length}
            countPerPage={this.props.paginationData.countPerPage}
            handlePageChange={this.handlePageChange}
            currPageNum={this.props.paginationData.currPageNum}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchCurrRates: value => dispatch(fetchCurrRates(value)),
  fetchCurrRatesOld: value => dispatch(fetchCurrRatesOld(value)),
  setTotalCount: count => dispatch(setTotalCount(count)),
  setPageNo: value => dispatch(setPageNo(value)),
  setCurrentData: value => dispatch(setCurrentData(value)),
  setAllData: value => dispatch(setAllData(value)),
  setCopyAllData: value => dispatch(setCopyAllData(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrTable);
