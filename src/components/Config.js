import React from "react";
import { connect } from "react-redux";
import { toggleVibrate, toggleLongBreak, setLongBreak } from "./../actions";
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
    setUseLongBreak: useLong => dispatch(toggleLongBreak(useLong)),
    setLBreak: longBreak => dispatch(setLongBreak(longBreak))
  };
};

class Config extends React.Component {
  onChangeVibrate = event => {
    this.props.setVibrate(event.target.value);
  };

  onChangeToggleCounter = event => {
    this.props.setUseLongBreak(event.target.value);
  };

  onChangeLongBreak = event => {
    this.props.setLBreak(event.target.value);
  };

  render() {
    return (
      <div>
        <div className="main-title">
          <h1>Tomato Timer</h1>
          <i class="fas fa-wrench main-icon" />
        </div>
        <SettingIcon path="/" color="white" />
        <div className="ui page grid timer-fonts">
          <div className="row">
            <div className="four wide computer column" />
            <div className="four wide computer  column">
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
                    checked={this.props.setting.useLongBreak}
                  />
                  <label>Use Break Counter</label>
                </div>
              </div>
              <div class="ui labeled input setting-input">
                <div class="ui label">Long Break</div>
                <input
                  type="text"
                  placeholder="... seconds"
                  value={this.props.setting.longBreak}
                  onChange={this.onChangeLongBreak}
                />
              </div>
            </div>
            <div className="four wide computer column" />
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
