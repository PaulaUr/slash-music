import React from "react";
import "./ion-searchbar.styles.scss";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

export const IonSearchBar = ({ placeholder, handleChange }) => {
  return (
    <div className="search-box-container">
      <input
        className="search-box-input"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Icon path={mdiMagnify} title="search icon" size={1} className="search-box-icon"/>
    </div>
  );
};
