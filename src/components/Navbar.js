import styles from 'styles/Navbar.module.css';

const Navbar = (props) => (
    <nav 
    className={styles.navbar}
    style={{display: props.display}}>
        <div className={styles.time_tunning_menu}>
            <span className={styles.menu_status}>
                <span className={styles.menu_status_bold}>{props.modeState}</span>
                인 일정
            </span>
            <div className={styles.menu}>
                <a 
                className={styles.menu_ing} 
                href='/ing'
                style={{color: props.ingColor}}
                onClick = { (e) => {
                    e.preventDefault();
                    props.onChangeScheduleMode('ing');
                    props.onChangeModeState('조율 진행중');
                }}
                >조율 진행</a>
                <a 
                className={styles.menu_end} 
                href='/end'
                style={{color: props.endColor}}
                onClick = { (e) => {
                    e.preventDefault();
                    props.onChangeScheduleMode('end');
                    props.onChangeModeState('조율 완료');
                }}
                >조율 완료</a>
            </div>
        </div>
        <button 
        className={styles.btn_add}
        type='button'
        onClick = { (e) => {
            e.preventDefault();
            props.onChangeScheduleMode('add');
        }}
        >추가하기</button>
    </nav>
);

export default Navbar;