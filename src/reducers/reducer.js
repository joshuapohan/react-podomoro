let defaultState = {
  value: 60,
  isRunning: false,
  label: "Session",
  isSession: true
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
      return {
        ...state,
        value: action.time,
        label: action.label,
        isSession: action.isSession
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
      return state >= 60 ? state - 60 : state;
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
  state = { vibrate: false, newCounter: 0, breakCounter: false },
  action
) => {
  switch (action.type) {
    case "TOGGLE_VIBRATE":
      return { ...state, vibrate: !state.vibrate };
    case "SET_LONG_BREAK":
      return { ...state, newCounter: action.newCounter };
    case "TOGGLE_BREAK_COUNTER":
      return { ...state, breakCounter: !state.breakCounter };
    default:
      return state;
  }
};
