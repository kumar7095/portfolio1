import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-blue-500" />
        )}
      </button>
    </header>
  );
};

export default Header;
