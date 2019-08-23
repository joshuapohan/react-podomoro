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

export const toggleTimer = (newTime, newLabel, isSession) => {
  return {
    type: "TOGGLE_TIMER",
    time: newTime,
    label: newLabel,
    isSession: isSession
  };
};
