import "../components/css/section.css"
import Section from "../components/Section";
import { useEffect, useState } from 'react';
import { get_data } from '../apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { clearSolved } from '../redux/monitorReducer';

const Monitor = props => {
  const dispatch = useDispatch()
  const monitor = useSelector(state => state.monitor)
  useEffect(()=>{
      var interval = setInterval(async() => {
        await get_data(dispatch)
      }, 5000);
  },[])
  useEffect (()=> {
    var interval = setInterval(() => {
      dispatch(clearSolved())
    }, 1000);
    return clearInterval(interval)
  })
    return (
    <>
      <Navbar title={"Afast"}/>
      <Section class={"detect"} errors={monitor.detect}/>
      <Section class={"work"} errors={monitor.work}/>
      <Section class={"solved"} errors={monitor.solved}/>
    </>
)}
export default Monitor;