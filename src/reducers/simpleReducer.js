export default (state = { result: null, resultOldData: null }, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    case "FETCH_DONE": {
      return { ...state, result: action.payload };
    }
    case "FETCH_FAIL":
      return {
        result: action.payload
      };
    case "FETCH_DONE_OLD_RATES":
      return { ...state, resultOldData: action.payload };
    case "FETCH_FAIL_OLD_RATES":
      return {
        resultOldData: action.payload
      };
    default:
      return state;
  }
};
