import styles from './MealItemForm.module.css'


const ErrorItemForm = props => {
    const onClickHandler = (event) => {
        event.preventDefault();
        props.deleteError(props.id)
        props.addErrorHandler(props.name, props.description,props.time)
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