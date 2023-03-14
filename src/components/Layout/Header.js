import styles from './Header.module.css'

const Header = props => {
    return <>
        <header className={styles.header} style={{backgroundColor: props.color}}>
            <p>Afast System</p>
        </header>
    </>
}
export default Header;