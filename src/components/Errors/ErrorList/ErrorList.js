import Card from "../../UI/Card";
import styles from "./ErrorList.module.css"
import ErrorItem from "../ErrorItem/ErrorItem";

const ErrorList = props => {
    if (props.errors !== []){
        const errorsList = props.errors.map((error) => 
        <ErrorItem key={error.id} name={error.name} description={error.description} time={error.time} />
    );
        return (<section className={styles.errors}>
            <Card>
                <ul>
                    {errorsList}
                </ul>
            </Card>
        </section> )
    } else {
        return (
        <section className={styles.errors}>
            <Card>
                <ul>
                    {props.errors}
                </ul>
            </Card>
        </section>
        )
    }
}

export default ErrorList