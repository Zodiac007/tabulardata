import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(70);

  console.log(currentPage);
  const fetchData = async () => {
    await fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
      .then((res) => res.json())
      .then((data) => {
        let arrayList = Object.keys(data.products).map((key) => {
          return [key, data.products[key]];
        });

        setData(arrayList);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1 className="text">Table data with Descending order of popularity</h1>
      {data && (
        <Table
          data={data}
          indexOfFirstPost={indexOfFirstPost}
          indexOfLastPost={indexOfLastPost}
        />
      )}
      {data && (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default App;
