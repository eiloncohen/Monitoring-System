import './css/erroritem.css';
import { addWork, removeDetect, removeSolved, removeWork,addDetect,addSolved } from '../redux/monitorReducer';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const ErrorItem = props => {
    const dispatch = useDispatch()
    const [time, setTime] = useState();
    const [isActive, setIsActive] = useState(true);
    // const propstime = props.time.split(":")

  useEffect(() => {
    // const error_time = new Date()
    // error_time.setHours(propstime[0])
    // error_time.setMinutes(propstime[1])
    // error_time.setSeconds(propstime[2])
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(Date.now() - props.time)
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
    console.log(Date.now())
    console.log(formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds));
    return formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds); 
  }
  
    return (
        <li>
        <div className={"error"}>
            <h3>{props.name}</h3>
            <div className={"description"}>{props.description}</div>
            <div className={"time"}>{isNaN(time) ? "00:00:00" :  msToTime(time)}</div>
        </div>
        <div>
            {
                props.fatherclass == "detect" && 
                <form className={"form"}>
                    <button onClick={(e)=> {e.preventDefault();  dispatch(removeDetect(props)); dispatch(addWork(props));}}> +level</button>
                </form>            
            }
            {
                props.fatherclass == "work" && 
                <form className={"form"}>
                    <button onClick={(e)=> {e.preventDefault();  dispatch(removeWork(props)); dispatch(addSolved(props));}}> +level</button>
                    <button onClick={(e)=> {e.preventDefault();  dispatch(removeWork(props)) ; dispatch(addDetect(props));}}> -level</button>
                </form>            
            }
            {
                props.fatherclass == "solved" && 
                <form className={"form"}>
                    <button onClick={(e)=> {e.preventDefault();  dispatch(removeSolved(props)); dispatch(addWork(props));}}> -level</button>
                </form>            
            }
        </div>
        
    </li>
    )
}

export default ErrorItem