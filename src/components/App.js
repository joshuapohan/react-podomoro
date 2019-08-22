import React from 'react';
import { connect } from 'react-redux'
import {incrementValue, decrementValue, startTimer, stopTimer} from './../actions';

const mapStateToProps = (state) => ({
    value: state.value,
    isRunning: state.isRunning
});

const mapDispatchToProps =(dispatch) => ({
    start: ()=>dispatch(startTimer()),
    stop: ()=>dispatch(stopTimer()),
    increment: ()=>dispatch(incrementValue()),
    decrement: ()=>dispatch(decrementValue())
});

let timerInterval;



const App = (props) => {

    const onClickStartTimer = (start, stop, isRunning) => {
        console.log(isRunning);
        if(isRunning){
            clearInterval(timerInterval);
            stop();
        } else{
            timerInterval = setInterval(()=>{
                start();
            }, 1000);
        }
    }

    return(
        <div>
            App
            <h1>{props.value}</h1>
            <button onClick={()=>onClickStartTimer(props.start, props.stop, props.isRunning)}>Start</button>
        </div>
    );
};

const container = connect(mapStateToProps, mapDispatchToProps)(App);
export default container;