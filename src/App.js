import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Toolbar from "./components/Toolbar/Toolbar";
import {
  simpleAction,
  fetchCurrRates,
  fetchCurrRatesOld
} from "./actions/simpleAction";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import CurrTable from "./components/CurrTable/CurrTable";
import CurrDropdown from "./components/CurrDropdown";
import {
  setCurrency,
  setTotalCount,
  setAllData
} from "./actions/paginationAction";
import SearchBar from "./components/SearchBar";
import { getDate } from "./utility";

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  simpleAction = event => {
    this.props.simpleAction();
  };

  componentWillMount() {
    this.props.setCurrency("JPY");

    var id = setInterval(() => {
      if (this.props.currData.result && this.props.currData.result !== "") {
        this.props.fetchCurrRatesOld(
          "JPY",
          getDate(this.props.currData.result.date)
        );
        clearInterval(id);
      }
    }, 200);
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="AppBody">
          <div className="tableOperations">
            <CurrDropdown
              selectedCurrency={this.props.paginationData.selectedCurrency}
              setCurrency={this.props.setCurrency}
              result={this.props.currData.result}
              fetchCurrRates={this.props.fetchCurrRates}
              fetchCurrRatesOld={this.props.fetchCurrRatesOld}
              date={
                this.props.currData.result
                  ? this.props.currData.result.date
                  : ""
              }
            />
            <SearchBar
              selectedCurrency={this.props.paginationData.selectedCurrency}
              setTotalCount={this.props.setTotalCount}
              result={this.props.currData.result}
              setAllData={this.props.setAllData}
              allData={this.props.paginationData.allData}
              copyAllData={this.props.paginationData.copyAllData}
            />
          </div>
          <CurrTable
            currRate={this.props.fetchCurrRates}
            oldRate={this.props.fetchCurrRatesOld}
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
  simpleAction: () => dispatch(simpleAction()),
  setCurrency: value => {
    dispatch(fetchCurrRates(value));
    dispatch(setCurrency(value));
  },
  setTotalCount: value => {
    dispatch(setTotalCount(value));
  },
  setAllData: value => {
    dispatch(setAllData(value));
  },
  fetchCurrRatesOld: (value1, value2) => {
    dispatch(fetchCurrRatesOld(value1, value2));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
