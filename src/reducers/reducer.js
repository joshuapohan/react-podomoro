let defaultState = {
  value: 60,
  isRunning: false,
  label: "Session",
  isSession: true,
  breakCounter: 0
};

export const timerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "RESET_TIMER":
      return defaultState;
    case "START_TIMER":
      return { ...state, value: state.value - 1, isRunning: true };
    case "STOP_TIMER":
      return { ...state, value: state.value, isRunning: false };
    case "TOGGLE_TIMER":
      let newBreakCount = state.breakCounter;
      if (state.isSession) {
        newBreakCount = state.breakCounter + 1;
      } else {
        newBreakCount = state.breakCounter === 5 ? 0 : state.breakCounter;
      }
      return {
        ...state,
        value: action.time,
        label: action.label,
        isSession: action.isSession,
        breakCounter: newBreakCount
      };
    case "INCREMENT_SESSION":
      if (state.isSession) {
        return { ...state, value: state.value + 60 };
      }
      return state;
    case "DECREMENT_SESSION":
      if (state.isSession) {
        if (state.value > 60) {
          return { ...state, value: state.value - 60 };
        }
      }
      return state;
    case "INCREMENT_BREAK":
      if (!state.isSession) {
        return { ...state, value: state.value + 60 };
      }
      return state;
    case "DECREMENT_BREAK":
      if (!state.isSession) {
        if (state.value > 60) {
          return { ...state, value: state.value - 60 };
        }
      }
      return state;
    default:
      return state;
  }
};

export const sessionReducer = (state = 60, action) => {
  switch (action.type) {
    case "INCREMENT_SESSION":
      if (state < 3600) {
        return state + 60;
      }
      return state;
    case "DECREMENT_SESSION":
      return state >= 60 ? state - 10 : state;
    case "RESET_TIMER":
      return 60;
    default:
      return state;
  }
};

export const breakReducer = (state = 60, action) => {
  switch (action.type) {
    case "INCREMENT_BREAK":
      if (state < 3600) {
        return state + 60;
      }
      return state;
    case "DECREMENT_BREAK":
      return state >= 60 ? state - 60 : state;
    case "RESET_TIMER":
      return 60;
    default:
      return state;
  }
};

export const settingReducer = (
  state = { vibrate: false, longBreak: 0, useLongBreak: false },
  action
) => {
  switch (action.type) {
    case "TOGGLE_VIBRATE":
      return { ...state, vibrate: !state.vibrate };
    case "SET_LONG_BREAK":
      return { ...state, longBreak: action.longBreak };
    case "TOGGLE_LONG_BREAK":
      return { ...state, useLongBreak: !state.useLongBreak };
    default:
      return state;
  }
};
