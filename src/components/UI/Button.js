import styles from './Button.module.css'

const Button = (props) => {
    return (
        <button className={styles.button} onClick={props.whatToDo}>{props.action}</button>
    );
}

export default Button