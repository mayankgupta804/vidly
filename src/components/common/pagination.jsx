import React from "react";

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {Array.apply(1, Array(pagesCount)).map(function(_, i) {
          return (
            <li className="page-item" key={i}>
              <a className="page-link">{i + 1}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
