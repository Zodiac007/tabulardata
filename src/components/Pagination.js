import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li
            onClick={() => paginate(number)}
            key={index}
            className={`page-item ${
              currentPage === index + 1 ? "active" : "not-active"
            }`}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}
