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
      //console.log({ ...state, value: state.value - 1, isRunning: true });
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
        return { ...state, value: state.value - 60 };
      }
      return state;
    case "INCREMENT_BREAK":
      if (!state.isSession) {
        return { ...state, value: state.value + 60 };
      }
      return state;
    case "DECREMENT_BREAK":
      if (!state.isSession) {
        return { ...state, value: state.value - 60 };
      }
      return state;
    default:
      return state;
  }
};

export const sessionReducer = (state = 60, action) => {
  switch (action.type) {
    case "INCREMENT_SESSION":
      return state + 60;
    case "DECREMENT_SESSION":
      return state >= 60 ? state - 60 : state;
    default:
      return state;
  }
};

export const breakReducer = (state = 60, action) => {
  switch (action.type) {
    case "INCREMENT_BREAK":
      return state + 60;
    case "DECREMENT_BREAK":
      return state >= 60 ? state - 60 : state;
    default:
      return state;
  }
};

export const notifierReducer = (state = 0, action) => {};
