export const incrementSession = () => {
  return {
    type: "INCREMENT_SESSION"
  };
};

export const decrementSession = () => {
  return {
    type: "DECREMENT_SESSION"
  };
};

export const incrementBreak = () => {
  return {
    type: "INCREMENT_BREAK"
  };
};

export const decrementBreak = () => {
  return {
    type: "DECREMENT_BREAK"
  };
};

export const startTimer = () => {
  return {
    type: "START_TIMER"
  };
};

export const stopTimer = () => {
  return {
    type: "STOP_TIMER"
  };
};

export const resetTimer = () => {
  return {
    type: "RESET_TIMER"
  };
};

export const toggleVibrate = vibrate => {
  return {
    type: "TOGGLE_VIBRATE",
    vibrate: vibrate
  };
};

export const toggleTimer = (newTime, newLabel, isSession) => {
  return {
    type: "TOGGLE_TIMER",
    time: newTime,
    label: newLabel,
    isSession: isSession
  };
};

export const setLongBreak = longBreak => {
  return {
    type: "SET_LONG_BREAK",
    longBreak: longBreak
  };
};

export const toggleLongBreak = useLongBreak => {
  return {
    type: "TOGGLE_LONG_BREAK",
    useLongBreak: useLongBreak
  };
};
