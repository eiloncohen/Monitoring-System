import styles from './MealItemForm.module.css'
import { useContext, useRef } from 'react';
import TimerContext from '../../store/timer-content';


const ErrorItemForm = props => {
    const timerCtx = useContext(TimerContext);

    const numberOfTimers = timerCtx.timers.reduce((curNumber, timer) => {
        return curNumber + 1
    }, 0);

    console.log(numberOfTimers)

    const onClickHandler = (event) => {
        event.preventDefault();
        props.deleteError(props.id)
        timerCtx.addTimer({
            id: props.id,
            name: props.name,
            description: props.description,
            time: props.seconds,
        })
        props.addErrorHandler(props.name, props.description,props.seconds, props.id)
    }
    const onMinusClickHandler = (event) => {
        if (props.sectionId === 2){
            event.preventDefault();
            props.deleteError(props.id)
            props.addDetectedError(props.name, props.description,props.time)
        } else{
            event.preventDefault();
            props.deleteError(props.id)
            props.addErrorHandler(props.name, props.description,props.time)
        }
    }
    if(props.sectionId === 1){
        console.log('here!!!!!!!')
    return <form className={styles.form}>
        <button onClick={onClickHandler}> +level</button>
    </form>
    } else if(props.sectionId == 3){
        return <form className={styles.form}>
        <button onClick={onClickHandler}> - level</button>
    </form>
    } else {
    return <form className={styles.form}>
        <button onClick={onClickHandler}> +level</button>
        <button onClick={onMinusClickHandler}> - level</button>
    </form>
    }

};


export default ErrorItemForm;