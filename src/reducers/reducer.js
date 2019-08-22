const valueReducer = (state = {value: 60, isRunning: false}, action) => {
    switch(action.type){
        case "START_TIMER" :
            return {...state, value: state.value - 1, isRunning: true};
        case "STOP_TIMER" :
            return {...state, value: state.value, isRunning: false};
        case "INCREMENT_VALUE" :
            return {...state, value: state.value + 1};
        case "DECREMENT_VALUE" :
            return {...state, value: state.value - 1};
        default:
            return state;
    }
};

export default valueReducer;