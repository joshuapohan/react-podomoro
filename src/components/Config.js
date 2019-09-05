import React from "react";
import { connect } from "react-redux";
import { toggleVibrate, toggleBreakCounter } from "./../actions";
import SettingIcon from "./SettingIcon";
import "./Config.css";

const mapStateToProps = state => {
  return {
    setting: state.setting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVibrate: vibrate => dispatch(toggleVibrate(vibrate)),
    setToggleBreakCounter: isSetCount =>
      dispatch(toggleBreakCounter(isSetCount))
  };
};

class Config extends React.Component {
  onChangeVibrate = event => {
    this.props.setVibrate(event.target.value);
  };

  onChangeToggleCounter = event => {
    this.props.setToggleBreakCounter(event.target.value);
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
          <div className="setting-input-wrapper">
            <div className="ui toggle checkbox setting-input">
              <input
                type="checkbox"
                name="public"
                onChange={this.onChangeVibrate}
                checked={this.props.setting.vibrate}
              />
              <label>Vibrate</label>
            </div>
          </div>
          <div className="setting-input-wrapper">
            <div className="ui toggle checkbox setting-input">
              <input
                type="checkbox"
                name="public"
                onChange={this.onChangeToggleCounter}
                checked={this.props.setting.breakCounter}
              />
              <label>Use Break Counter</label>
              <div className="ui input setting-counter-input">
                <input type="text" placeholder="..." />
              </div>
            </div>
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
