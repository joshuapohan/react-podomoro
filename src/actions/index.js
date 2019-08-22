export const incrementValue = () => {
    return({
        type: "INCREMENT_VALUE"
    });
};

export const decrementValue = () => {
    return({
        type: "DECREMENT_VALUE"
    });
};

export const startTimer = () => {
    return({
        type: "START_TIMER"
    });
};

export const stopTimer = () => {
    return({
        type: "STOP_TIMER"
    });
};