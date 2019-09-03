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

export const toggleVibrate = () => {
  return {
    type: "TOGGLE_VIBRATE"
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

export const setBreakCounter = newCounter => {
  return {
    type: "SET_BREAK_COUNTER",
    newCounter: newCounter
  };
};
