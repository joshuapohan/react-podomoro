import React from "react";
import { connect } from "react-redux";
import {
  incrementSession,
  decrementSession,
  incrementBreak,
  decrementBreak,
  startTimer,
  stopTimer,
  toggleTimer
} from "./../actions";

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
  toggleTimer: (newTimer, newLabel, isSession) =>
    dispatch(toggleTimer(newTimer, newLabel, isSession))
});

let timerInterval;

class App extends React.Component {
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
        App
        <h1>{this.props.timer.label}</h1>
        <h1>{this.getClockDisplay(this.props.timer.value, false)}</h1>
        <button
          onClick={() =>
            this.onClickStartTimer(
              this.props.start,
              this.props.stop,
              this.props.timer.isRunning
            )
          }
        >
          Start
        </button>
        <h1>{this.getClockDisplay(this.props.session, true)}</h1>
        <button onClick={() => this.props.decrementSession()}>{"<"}</button>
        <button onClick={() => this.props.incrementSession()}>{">"}</button>
        <h1>{this.getClockDisplay(this.props.break, true)}</h1>
        <button onClick={() => this.props.decrementBreak()}>{"<"}</button>
        <button onClick={() => this.props.incrementBreak()}>{">"}</button>
      </div>
    );
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default container;
