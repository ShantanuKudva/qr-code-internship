import React, { useState, useEffect } from "react";

import Desktop15 from "./Desktop15";

function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );
}

function MyComponent() {
  const [values, setValues] = useState(() => {
    const storedData = localStorage.getItem("values");
    return storedData ? JSON.parse(storedData) : data;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;
  const scrollRefs = {};

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  const toggleValue = (key) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: !prevValues[key],
    }));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredValues = Object.keys(values).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedValues = filteredValues.slice(startIndex, endIndex);

  const renderedValues = paginatedValues.map((key) => (
    <div key={key} ref={(ref) => (scrollRefs[key] = ref)}>
      {key}: {values[key] ? "True" : "False"}
      <button onClick={() => toggleValue(key)}>Toggle</button>
    </div>
  ));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {renderedValues}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredValues.length}
        onPageChange={setCurrentPage}
      />
      <div>
        <Desktop15 values={values} />
      </div>
    </div>
  );
}

export default MyComponent;
