import React from "react";
import { Link } from "react-router-dom";
import "./SettingIcon.css";

export default props => {
  return (
    <div>
      <div className="setting-icon">
        <Link className="gear" to={props.path} style={{ color: props.color }}>
          <i className="fas fa-cog" />
        </Link>
      </div>
    </div>
  );
};
