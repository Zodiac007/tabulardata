import React from "react";

export default function Table({ data, indexOfFirstPost, indexOfLastPost }) {
  return (
    <>
      <table id="products">
        <thead>
          <tr>
            <th>Title</th>
            <th>Subcategory</th>
            <th>Price</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort((a, b) => b[1].popularity - a[1].popularity)
            .slice(indexOfFirstPost, indexOfLastPost)
            .map((item, index) => (
              <tr key={index}>
                <td>{item[1].title}</td>
                <td>{item[1].subcategory}</td>
                <td>{item[1].price}</td>
                <td>{item[1].popularity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
