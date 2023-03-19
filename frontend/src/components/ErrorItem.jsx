import './css/erroritem.css';
import { add, removeDetect, removeSolved, removeWork } from '../redux/monitorReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ErrorItem = props => {
    const dispatch = useDispatch()
    const monitor = useSelector(state => state.monitor)
    const [error,setError] = useState(monitor.detect.find(elm => elm.id == props.id) || monitor.work.find(elm => elm.id == props.id) || monitor.solved.find(elm => elm.id == props.id))
    const [totalTime, setTotalTime] = useState(Date.now() - error.detect_time);
    const [timeInDetect, setTimeInDetect] = useState(error.state === "detect" && Date.now() - error.detect_time);
    const [timeInWork, setTimeInWork] = useState(error.state === "work" && Date.now() - error?.work_time);
    const [timeToBeSolved, setTimeToBeSolved] = useState(error.state === "solved" && Date.now() - error?.detect_time);
    const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTotalTime(Date.now() - error?.detect_time)
        error.state === "detect" && setTimeInDetect(Date.now() - error.detect_time)
        error.state === "work" && setTimeInWork(Date.now() - error.work_time)
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, []);


  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };


  const msToTime = (milli) => {
    var seconds = Math.floor((milli / 1000) % 60);
    var minutes = Math.floor((milli / (60 * 1000)) % 60);
    var hours = Math.floor((milli / (1000 * 60 * 60)) % 24)
    return formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds); 
  }
  
    return (
        <li>
        <div className={"error"}>
            <h3>{error?.name}</h3>
            <div className={"description"}>{error?.description}</div>
            {
              error.state === "detect" && <div className={"time"} style={{"fontSize":"12px"}}>Time In Detect : {msToTime(timeInDetect)} </div> 
            }
            {
              error.state === "work" &&  <div className={"time"} style={{"fontSize":"12px"}}>Time in Work : {msToTime(timeInWork)} </div>
            }
            {
              error.state === "solved" &&  <div className={"time"} style={{"fontSize":"12px"}}>Time From Detect (total) : {msToTime(timeToBeSolved)} </div>
            }
            <div className={"time"}>{isNaN(totalTime) ? "00:00:00" :  msToTime(totalTime)}</div>
        </div>
        <div>
            {
                error?.state == "detect" && 
                <form className={"form"}>
                    <button onClick={(e)=> {e.preventDefault();  dispatch(removeDetect(error)); dispatch(add({...error,state: "work"}))}}> +level</button>
                </form>            
            }
            {
                error?.state == "work" && 
                <form className={"form"}>
                    <button onClick={(e)=> {e.preventDefault();  dispatch(removeWork(error)); dispatch(add({...error,state: "solved"}));}}> +level</button>
                    <button onClick={(e)=> {e.preventDefault();  dispatch(removeWork(error)); dispatch(add({...error,state: "detect"}));}}> -level</button>
                </form>            
            }
            {
                error?.state == "solved" && 
                <form className={"form"}>
                    <button onClick={(e)=> {e.preventDefault();  dispatch(removeSolved(error)); dispatch(add({...error,state: "work"}));}}> -level</button>
                </form>            
            }
        </div>
        
    </li>
    )
}

export default ErrorItem