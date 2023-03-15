import './App.css';
import { useEffect, useState } from 'react';
import Section from './components/Section';
import { get_data } from './apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch()
  const monitor = useSelector(state => state.monitor)
  useEffect(()=>{
    const initialize_data = async()=> {
      await get_data(dispatch)
    }
    initialize_data()
  },[])

  return (
    <>
      <Navbar title={"Afast"}/>
      <Section class={"detect"} errors={monitor.detect}/>
      <Section class={"work"} errors={monitor.work}/>
      <Section class={"solved"} errors={monitor.solved}/>
    </>
  );
}

export default App;
