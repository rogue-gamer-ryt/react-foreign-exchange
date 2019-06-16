import React from "react";
import "./Pagination.css";

export default function Pagination(props) {
  const handlePageChange = e => {
    e.preventDefault();
    props.handlePageChange(e.target.id);
  };

  const backPageChange = e => {
    e.preventDefault();
    var prevPageNum;
    if (props.currPageNum != 1) {
      prevPageNum = parseInt(props.currPageNum) - 1;
      props.handlePageChange(prevPageNum);
    }
  };
  const nextPageChange = e => {
    e.preventDefault();
    var nextPageNum;
    const { totalCount, countPerPage } = props;

    var pageCount = Math.ceil(totalCount / countPerPage);
    if (props.currPageNum != pageCount) {
      nextPageNum = parseInt(props.currPageNum) + 1;
      props.handlePageChange(nextPageNum);
    }
  };

  const createPagination = () => {
    const { totalCount, countPerPage } = props;
    var pageCount = Math.ceil(totalCount / countPerPage);
    var pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(
        <a
          className={props.currPageNum == i ? "active-page" : "inactive-page"}
          onClick={handlePageChange}
          id={i}
          key={i}
        >
          {i}
        </a>
      );
    }
    return pages;
  };

  return (
    <div>
      <div className="pagination">
        <a
          href="#"
          onClick={backPageChange}
          className={
            props.currPageNum == 1
              ? "pagination-arrow arrow-disable"
              : "pagination-arrow"
          }
        >
          ❮&nbsp;
        </a>
        {createPagination()}
        <a
          href="#"
          onClick={nextPageChange}
          className={
            props.currPageNum ==
            Math.ceil(props.totalCount / props.countPerPage)
              ? "pagination-arrow arrow-disable"
              : "pagination-arrow"
          }
        >
          &nbsp;❯
        </a>
      </div>
    </div>
  );
}
