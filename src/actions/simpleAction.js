export const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};

export function fetchCurrRates(selectedCurr) {
  return function(dispatch) {
    fetch("https://api.exchangeratesapi.io/latest?base=" + selectedCurr)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "FETCH_DONE", payload: data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_FAIL", payoad: err });
      });
  };
}

export function fetchCurrRatesOld(selectedCurr, prevDate) {
  return function(dispatch) {
    fetch(
      "https://api.exchangeratesapi.io/history?start_at=" +
        prevDate +
        "&end_at=" +
        prevDate +
        "&base=" +
        selectedCurr
    )
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "FETCH_DONE_OLD_RATES", payload: data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_FAIL_OLD_RATES", payoad: err });
      });
  };
}
