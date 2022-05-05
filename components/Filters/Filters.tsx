import React from "react";

const Filters = () => {
  return (
    <>
      <h2 className="text-2xl mb-4">New & Trending</h2>
      <div className="mb-6 sm:flex justify-between">
        <input
          className="bg-darkBlue2 px-6 py-2 rounded-full mb-3 sm:mb-0"
          type="text"
          name="search"
          placeholder="Search"
          id=""
        />
        <div>
          <label className="mr-2" htmlFor="sort">
            Sort by:
          </label>
          <select
            className="bg-darkBlue2 px-6 py-2 rounded-full"
            name="sort"
            id="sort"
          >
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
