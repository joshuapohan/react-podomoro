import React from "react";
import { Link } from "react-router-dom";
import "./SettingIcon.css";

export default props => {
  return (
    <div className="setting-icon">
      <Link className="gear" to={props.path}>
        <i className="fas fa-cog" />
      </Link>
    </div>
  );
};
