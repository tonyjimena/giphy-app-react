import React from "react";
import "./styles.scss";

export default function AdvancedSearchComponent({
  onHandleSubmit,
  onHandleChange,
}) {
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          onChange={onHandleChange}
          type="search"
          placeholder="Search"
          required
        />
        <select>
          <option>Stickers</option>
          <option>gifs</option>
        </select>
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}
