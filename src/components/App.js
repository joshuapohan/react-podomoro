import React from "react";
import { connect } from "react-redux";
import {
  incrementSession,
  decrementSession,
  incrementBreak,
  decrementBreak,
  startTimer,
  stopTimer,
  toggleTimer,
  resetTimer
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
    dispatch(toggleTimer(newTimer, newLabel, isSession))
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
    if (isRunning) {
      clearInterval(timerInterval);
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
        <div className="main-title">
          <h1>Tomato Timer</h1>
        </div>
        <div className="ui page grid timer-fonts">
          <div className="row main-timer">
            <div className="five wide computer two wide mobile column" />
            <div className="six wide computer twelve wide mobile column">
              <h1>{this.props.timer.label}</h1>
              <h1>{this.getClockDisplay(this.props.timer.value, false)}</h1>
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
                  <i className="far fa-pause-circle" />
                ) : (
                  <i className="far fa-play-circle" />
                )}
              </button>
              <button
                className="action-button"
                onClick={this.onClickResetTimer}
              >
                <i className="far fa-stop-circle" />
              </button>
            </div>
            <div className="five wide computer two wide mobile column" />
          </div>
          <div className="row main-timer">
            <div className="five wide computer two wide mobile column" />
            <div className="six wide computer twelve wide mobile column">
              <button
                className="action-button"
                onClick={() => this.props.decrementSession()}
              >
                {"<"}
              </button>
              <h1 className="timer">
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
              <h1 className="timer">
                {this.getClockDisplay(this.props.break, true)}
              </h1>
              <button
                className="action-button"
                onClick={() => this.props.incrementBreak()}
              >
                {">"}
              </button>
            </div>
            <div className="five wide computer two wide mobile column" />
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
