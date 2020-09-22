import React from "react";
import "./styles.css";

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
        </ul>
      </nav>
    </div>
  );
}
