import React from "react";
import { Link } from "wouter";

import "./styles.scss";

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className="Nav-List">
          <li>
            <Link href="/Gifs">
              <a href="/Gifs" className="link">
                Gifs
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
            <Link href="/search">
              <a href="/search" className="link">
                Search
              </a>
            </Link>
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
