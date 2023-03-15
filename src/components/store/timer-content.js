import React, {createContext, useContext} from "react";


const TimerContext = createContext({
    timers: [],
    addTimer: (timer) => {},
    removeTimer: (id) => {}
});


export default TimerContext;