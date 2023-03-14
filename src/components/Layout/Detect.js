import styles from './Detect.module.css'
import Errors from '../Errors/Errors';
import ErrorList from '../Errors/ErrorList/ErrorList';

const Detect = props => {
    if (props.id === 1){
        return <>
            <div id={props.id} className={styles.detect} style={{backgroundColor: props.color}}>
                <Errors errorList={props.errorList} addErrorHandler={props.addErrorHandler} deleteError={props.deleteError} sectionId={props.id}/>
            </div>
        </>
    } else if(props.id === 2) {
        return <>
            {/* <div id={props.id} className={styles.detect} style={{backgroundColor: props.color}}>
                <ErrorList errors={props.errorListInTreatment}/>
            </div> */}
            <div id={props.id} className={styles.detect} style={{backgroundColor: props.color}}>
                <Errors addErrorHandler={props.addErrorFinishHandler} errorList={props.errorListInTreatment} deleteError={props.deleteFromTreatmentListError} 
                 addDetectedError={props.addDetectedError} sectionId={props.id}/>
            </div>
        </>
    }
    else {
        return <>
            <div id={props.id} className={styles.detect} style={{backgroundColor: props.color}}>
                <Errors addErrorHandler={props.addErrorHandler} errorList={props.errorFinishedList} deleteError={props.deleteFromFinishListError} sectionId={props.id}/>
            </div>
        </>
    }
}
export default Detect;