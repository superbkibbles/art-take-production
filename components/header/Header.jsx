import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <header>
            <img className={styles.logo} src={'/static/logo.png'} width={500} height={500} />
            <center>
                <h2 style={{marginBottom: '0px'}}>Scroll Down</h2>
                <div style={{ width: 70, height: 70, transform: 'rotateZ(45deg)', borderBottom: '3px solid black', borderRight: '3px solid black' }} />
            </center>
     
        </header>
    )
}

export default Header;