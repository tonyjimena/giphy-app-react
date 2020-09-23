import React from "react";
import './styles.scss'

export default function SearchComponent({ onHandleSubmit, onHandleChange }) {
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input onChange={onHandleChange}  type="search" placeholder="Search" required/>
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}
