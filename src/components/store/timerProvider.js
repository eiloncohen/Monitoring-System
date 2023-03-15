import { useReducer } from 'react';
import TimerContext from './timer-content';

const defaultTimerState = {
    timers: []
}

const timerReducer = (state, action) => {
    if(action === 'ADD'){
        console.log("add!")
        const updatedTimers = state.timers.concat(action.timer);
        console.log(updatedTimers)
        return {
            timers: updatedTimers
        };
    }
    return defaultTimerState;
}

const TimerProvider = props => {
    
    const [timerState, dispatchTimerAction] = useReducer(timerReducer, defaultTimerState);

    const addTimerHandler = timer => {
        console.log("at addTimerHandler function")
        console.log(timer)
        dispatchTimerAction({
            type: 'ADD', 
            timer: timer
        });
    };

    const removeTimerHandler = id => {
        dispatchTimerAction({
            type: 'REMOVE', 
            id: id
        });
    };
    
    const timerContext = {
        timers: timerState.timers,
        addTimer: addTimerHandler,
        removeTimer: removeTimerHandler
    };
     
    return <TimerContext.Provider value={timerContext}>
        {props.children}
    </TimerContext.Provider>
}

export default TimerProvider;