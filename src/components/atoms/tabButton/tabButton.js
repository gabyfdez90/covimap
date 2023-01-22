import React from "react";
import "../tabButton/tabButton.css";

export const TabButton = ({ country, flag, isActive, onSetActive }) => (
  <li
    className={`tabButton ${isActive ? "active" : ""}`}
    onClick={() => onSetActive(country)}
  >
    <img
      className="flag"
      src={flag}
      alt={country}
      style={{ height: 30, width: 30 }}
    ></img>

    <span className="tabButtonText">{country}</span>
  </li>
);
