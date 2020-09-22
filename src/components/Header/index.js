import React from "react";
import logo from '../../assets/img/logo-skinner-fondo.png';
import "./styles.css";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <div className='title'>
        <h1>
          SKINNER
          <br/>
          DEV
        </h1>
      </div> */}
      <a
        className="Github-link"
        href="https://github.com/tonyjimena"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </header>
  );
}
