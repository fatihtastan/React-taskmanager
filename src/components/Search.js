import React, { useState, useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const Search = () => {
  const { search, setsearch } = useContext(TaskListContext);

  const searchFind = (e) => {
    setsearch(e.target.value);
  };

  return (
    <form>
      <input
        onChange={searchFind}
        value={search}
        type="text"
        className="task-input"
        placeholder="Find Task..."
      />
    </form>
  );
};

export default Search;
