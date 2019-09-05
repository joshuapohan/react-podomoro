import React from "react";
import { connect } from "react-redux";
import { toggleVibrate } from "./../actions";
import SettingIcon from "./SettingIcon";
import "./Config.css";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setVibrate: vibrate => dispatch(toggleVibrate(vibrate))
  };
};

class Config extends React.Component {
  onChange = event => {
    this.props.setVibrate(event.target.value);
  };

  render() {
    return (
      <div>
        <div className="main-title">
          <h1>Tomato Timer</h1>
          <i class="fas fa-wrench main-icon" />
        </div>
        <SettingIcon path="/" color="white" />
        <div className="config-bg">
          <div className="ui toggle checkbox">
            <input type="checkbox" name="public" onChange={this.onChange} />
            <label>Vibrate</label>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Config);
