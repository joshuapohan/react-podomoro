import React from "react";
import { connect } from "react-redux";
import SettingIcon from "./SettingIcon";
import {
  incrementSession,
  decrementSession,
  incrementBreak,
  decrementBreak,
  startTimer,
  stopTimer,
  toggleTimer,
  resetTimer,
  toggleVibrate
} from "./../actions";

import "./App.css";

const mapStateToProps = state => ({
  timer: state.timer,
  session: state.session,
  break: state.break
});

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(startTimer()),
  stop: () => dispatch(stopTimer()),
  incrementSession: () => dispatch(incrementSession()),
  decrementSession: () => dispatch(decrementSession()),
  incrementBreak: () => dispatch(incrementBreak()),
  decrementBreak: () => dispatch(decrementBreak()),
  resetTimer: () => dispatch(resetTimer()),
  toggleTimer: (newTimer, newLabel, isSession) =>
    dispatch(toggleTimer(newTimer, newLabel, isSession)),
  toggleVibrate: () => dispatch(toggleVibrate())
});

let timerInterval;

class App extends React.Component {
  onClickResetTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    this.props.resetTimer();
  };

  onClickStartTimer = (start, stop, isRunning) => {
    console.log(timerInterval);
    if (isRunning || timerInterval) {
      console.log("Running");
      clearInterval(timerInterval);
      timerInterval = null;
      stop();
    } else {
      timerInterval = setInterval(() => {
        start();
        this.checkTimer();
      }, 1000);
    }
  };

  checkTimer = () => {
    if (this.props.timer.value <= 0) {
      // enable vibration support
      navigator.vibrate =
        navigator.vibrate ||
        navigator.webkitVibrate ||
        navigator.mozVibrate ||
        navigator.msVibrate;

      if (navigator.vibrate) {
        navigator.vibrate(1000);
      }
      //
      if (this.props.timer.isSession) {
        this.props.toggleTimer(this.props.break, "Break", false);
      } else {
        this.props.toggleTimer(this.props.session, "Session", true);
      }
    }
  };

  getClockDisplay(value, minutesOnly) {
    let mins = Math.floor(value / 60);
    let secs = value - mins * 60;
    return (
      (mins < 10 ? "0" + mins : "" + mins) +
      (minutesOnly ? "" : ":" + (secs < 10 ? "0" + secs : "" + secs))
    );
  }

  render() {
    return (
      <div>
        <SettingIcon path="/config" />
        <div className="main-title">
          <h1>Tomato Timer</h1>
          <i className="fas fa-clock main-icon" />
        </div>
        <div className="ui page grid timer-fonts">
          <div className="row main-timer">
            <div className="five wide computer two wide tablet two wide mobile column" />
            <div className="six wide computer twelve wide tablet twelve wide mobile column">
              <h1 className="timer-label">{this.props.timer.label}</h1>
              <h1 className="timer-countdown">
                {this.getClockDisplay(this.props.timer.value, false)}
              </h1>
              <button
                className="action-button"
                onClick={() =>
                  this.onClickStartTimer(
                    this.props.start,
                    this.props.stop,
                    this.props.timer.isRunning
                  )
                }
              >
                {this.props.timer.isRunning ? (
                  <i className="far fa-pause-circle play-icon" />
                ) : (
                  <i className="far fa-play-circle play-icon" />
                )}
              </button>
              <button
                className="action-button"
                onClick={this.onClickResetTimer}
              >
                <i className="far fa-stop-circle play-icon" />
              </button>
            </div>
            <div className="five wide computer two wide tablet two wide mobile column" />
          </div>
          {/**
          <div className="row main-timer">
            <div className="five wide computer two wide tablet two wide mobile column" />
            <div className="six wide computer twelve wide tablet twelve wide mobile column">
              <h2 className="timer-label">Session</h2>
              <h2 className="timer-label">Break</h2>
            </div>
            <div className="five wide computer two wide tablet two wide mobile column" />
          </div>
                */}
          <div className="row main-timer">
            <div className="five wide computer two wide tablet two wide mobile column" />
            <div className="six wide computer twelve wide tablet twelve wide mobile column">
              <button
                className="action-button"
                onClick={() => this.props.decrementSession()}
              >
                {"<"}
              </button>
              <h1 className="timer setting-value">
                {this.getClockDisplay(this.props.session, true)}
              </h1>
              <button
                className="action-button"
                onClick={() => this.props.incrementSession()}
              >
                {">"}
              </button>
              <button
                className="action-button"
                onClick={() => this.props.decrementBreak()}
              >
                {"<"}
              </button>
              <h1 className="timer setting-value">
                {this.getClockDisplay(this.props.break, true)}
              </h1>
              <button
                className="action-button"
                onClick={() => this.props.incrementBreak()}
              >
                {">"}
              </button>
            </div>
            <div className="five wide computer two wide tablet two wide mobile column" />
          </div>
        </div>
      </div>
    );
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default container;
