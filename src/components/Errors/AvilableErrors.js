import React, {useState} from 'react';
import styles from './AvailableErrors.module.css';
import ErrorItem from './ErrorItem/ErrorItem';
import Card from '../UI/Card'
import Timer from './ErrorItem/timer';

const AvilableErrors = (props) => {
  const errorsList = props.errorList.map((error) => 
        <ErrorItem id={error.id} name={error.name} description={error.description} time={<Timer/>} addErrorHandler={props.addErrorHandler}
        deleteError={props.deleteError} addDetectedError={props.addDetectedError} sectionId={props.sectionId}/>
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