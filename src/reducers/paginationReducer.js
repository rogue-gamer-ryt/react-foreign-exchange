export default (
  state = {
    currPageNum: 1,
    currPageData: [],
    allData: [],
    selectedCurrency: "JPY",
    countPerPage: 8
  },
  action
) => {
  switch (action.type) {
    case "SET_PAGE_NO":
      return { ...state, currPageNum: action.payload };
    case "SET_CURRENT_DATA": {
      return { ...state, currPageData: action.payload };
    }
    case "SET_ALL_DATA": {
      return { ...state, allData: action.payload };
    }
    case "SET_TOTAL_COUNT": {
      return { ...state, totalCount: action.payload };
    }
    case "SET_COUNT_PER_PAGE": {
      return { ...state, countPerPage: action.payload };
    }
    case "SET_CURRENCY": {
      return { ...state, selectedCurrency: action.payload };
    }
    case "SET_COPY_ALL_DATA": {
      return { ...state, copyAllData: action.payload };
    }
    default:
      return state;
  }
};
