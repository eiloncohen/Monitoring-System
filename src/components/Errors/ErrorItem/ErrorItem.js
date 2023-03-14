import styles from './ErrorsItem.module.css';
import ErrorItemForm from './ErrorItemForm';

const ErrorItem = props => {
    
    return <li className={styles.error}>
        <div>
            <h3 className={styles.name}>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.time}>{props.time}</div>
        </div>
        <div>
            <ErrorItemForm id={props.id} name={props.name} description={props.description} time={props.time} 
            addErrorHandler={props.addErrorHandler} deleteError={props.deleteError} addDetectedError={props.addDetectedError} sectionId={props.sectionId}/>
        </div>
    </li>
}

export default ErrorItem