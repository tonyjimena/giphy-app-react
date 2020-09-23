import React from "react";
import "./styles.scss";

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className="Nav-List">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="trendy">Trendys</a>
          </li>

          <li>
            <a href="liked">Most liked</a>
          </li>
          <li>
            <a href="liked">Recently</a>
          </li>
          <li>
            <a href="liked">Most viewed</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
