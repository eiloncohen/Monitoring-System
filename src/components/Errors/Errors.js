// import ErrorsSummery from "./ErrorsSummery";
import AvilableErrors from "./AvilableErrors";

const Errors = (props) => {
    return <>
        {/* <ErrorsSummery/> */}
        <AvilableErrors addErrorHandler={props.addErrorHandler} errorList={props.errorList} deleteError={props.deleteError} addDetectedError={props.addDetectedError} sectionId={props.sectionId}/>
    </>
}

export default Errors; 