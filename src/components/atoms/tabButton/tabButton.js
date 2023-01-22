import React from "react";
import style from "./tabButton.css";

export const TabButton = ({ country, flag, isActive, onSetActive }) => (
  <li
    className={`tab-button ${isActive ? "active" : ""}`}
    onClick={() => onSetActive(country)}
  >
    <img src={flag} alt={country} />
    <span className="tab-button-text">{country}</span>
  </li>
);
