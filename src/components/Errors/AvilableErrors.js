import React, {useState} from 'react';
import styles from './AvailableErrors.module.css';
import ErrorItem from './ErrorItem/ErrorItem';
import Card from '../UI/Card'
import Timer from './ErrorItem/timer';
import TimerProvider from '../store/timerProvider';

const AvilableErrors = (props) => {
  console.log(props.errorList)
  const errorsList = props.errorList.map((error) =>
  {
    console.log(error.id)
    let seconds = localStorage.getItem(error.sectionId);
    if (seconds === undefined || seconds == null){
      seconds = 0
    }
    return(
        <TimerProvider>
            <ErrorItem id={error.id} name={error.name} description={error.description} time={<Timer sec={seconds} id={error.id}/>} addErrorHandler={props.addErrorHandler}
            deleteError={props.deleteError} addDetectedError={props.addDetectedError} sectionId={props.sectionId} seconds={seconds}/>
        </TimerProvider>
    )
  }
  );
    return <section className={styles.errors}>
        <Card>
            <ul>
                {errorsList}
            </ul>
        </Card>
    </section>
};


export default AvilableErrors