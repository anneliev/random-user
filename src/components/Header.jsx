import React from 'react';
import logo from '../logo.svg';

export default function Header(props) {
  return (
    <header className="bg-indigo-800 p-2">
      <a
        href="#main-menu"
        role="button"
        className="absolute w-full border-black rounded-sm bg-black text-white left-0 top-0 p-2 -mt-64 focus:mt-0"
      >
        Hoppa till huvudmeny
      </a>
      <a
        href="#main-content"
        role="button"
        className="absolute w-full border-black rounded-sm bg-black text-white left-0 top-0 p-2 -mt-64 focus:mt-0"
      >
        Hoppa till innehåll
      </a>
      <nav id="main-menu">
        <ul className="flex justify-between">
          <li>
            <a href="/">
              <img alt="React logo" src={logo} className="h-10" />
            </a>
          </li>
          <li>
            <button aria-label="has-popup" id="main-menu">
              <img alt="Menu" src={logo} className="h-10" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
