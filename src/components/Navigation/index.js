import React from "react";
import { Link } from "wouter";

import "./styles.scss";

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className="Nav-List">
          <li>
            <Link href="/">
              <a href="/" className="link">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/stickers">
              <a href="/stickers" className="link">
                Stickers
              </a>
            </Link>
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
          <li>
            <Link href="/users/1">
              <a href="/users/1" className="link">
                Profile
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a href="/about" className="link">
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
