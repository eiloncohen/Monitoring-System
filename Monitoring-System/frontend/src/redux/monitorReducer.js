import { createSlice } from "@reduxjs/toolkit";

const monitorSlice = createSlice({
  name: "monitor",
  initialState: {
    detect: [],
    work: [],
    solved: [],
    totalTimeOfDetect: 0,
    totalTimeOfTreatment: 0,
  },
  reducers: {
    addDetect: (state, action) => {
        console.log(action.payload);
        if(state.detect.find(obj=> {// will concat objects in detect[] instead of pushing few copyies from the same instances !
            return obj.id === action.payload.id
          }) || 
          state.work.find(obj=> {// will concat objects in detect[] instead of pushing few copyies from the same instances !
            return obj.id === action.payload.id
          }) || 
          state.solved.find(obj=> {// will concat objects in detect[] instead of pushing few copyies from the same instances !
            return obj.id === action.payload.id
          }))
          {
            console.log("already in !");
            return 
          }
          else {//else if object is not in detect[] will push him inside
            console.log(action.payload);
            state.detect.push(action.payload);
            console.log(state.detect.toString());
          }
    },
    addWork: (state, action) => {
        console.log(action.payload);
        if(state.work.find(obj=> {// will concat objects in work[] instead of pushing few copyies from the same instances !
            return obj.id === action.payload.id
          }))
          {
            console.log("already in !");
            return 
          }
          else {//else if object is not in work[] will push him inside
            console.log(action.payload);
            state.work.push(action.payload);
          }
    },
    addSolved: (state, action) => {
        console.log(action.payload);
        if(state.solved.find(obj=> {// will concat objects in solved[] instead of pushing few copyies from the same instances !
            return obj.id === action.payload.id
          }))
          {
            console.log("already in !");
            return 
          }
          else {//else if object is not in solved[] will push him inside
            console.log(action.payload);
            state.solved.push(action.payload);
          }
    },
    removeDetect: (state, action) => {
        state.detect = state.detect.filter((obj=> {
            return obj.id !== action.payload.id
           }))
    },
    removeWork: (state, action) => {
        state.work = state.work.filter((obj=> {
            return obj.id !== action.payload.id
           }))
    },
    removeSolved: (state, action) => {
        state.solved = state.solved.filter((obj=> {
            return obj.id !== action.payload.id
           }))
    },
  },
});

export const { addDetect,addWork,addSolved,removeDetect,removeWork,removeSolved } = monitorSlice.actions;
export default monitorSlice.reducer;
