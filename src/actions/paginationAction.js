export const setPageNo = data => dispatch => {
  dispatch({
    type: "SET_PAGE_NO",
    payload: data
  });
};
export const setCurrentData = data => dispatch => {
  dispatch({
    type: "SET_CURRENT_DATA",
    payload: data
  });
};
export const setAllData = data => dispatch => {
  dispatch({
    type: "SET_ALL_DATA",
    payload: data
  });
};
export const setTotalCount = data => dispatch => {
  dispatch({
    type: "SET_TOTAL_COUNT",
    payload: data
  });
};
export const setCountPerPage = data => dispatch => {
  dispatch({
    type: "SET_COUNT_PER_PAGE",
    payload: data
  });
};
export const setCurrency = data => dispatch => {
  dispatch({
    type: "SET_CURRENCY",
    payload: data
  });
};
export const setCopyAllData = data => dispatch => {
  dispatch({
    type: "SET_COPY_ALL_DATA",
    payload: data
  });
};
