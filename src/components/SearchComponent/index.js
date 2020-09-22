import React from "react";

export default function SearchComponent({ onHandleSubmit, onHandleChange }) {
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="search" placeholder="Search" onChange={onHandleChange} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}
