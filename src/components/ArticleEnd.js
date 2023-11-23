import { Link } from 'react-router-dom';
// import ScheduleBlock from "components/ScheduleBlock";
import styles from 'styles/Article.module.css';

const ArticleEnd = (props) => (
    <div>
        <nav 
            className={styles.navbar}
            >
                <div className={styles.time_tunning_menu}>
                    <span className={styles.menu_status}>
                        <span className={styles.menu_status_bold}>{props.modeState}</span>
                        인 일정
                    </span>
                    <div className={styles.menu}>
                        <Link 
                        to="/mySchedule/ing"
                        className={styles.tab}
                        onClick = { () => {
                            props.onChangeModeState('조율 진행중');
                        }}
                        >조율 진행</Link>
                        <Link 
                        to="/mySchedule/end"
                        className={styles.tab}
                        onClick = { () => {
                            props.onChangeModeState('조율 완료');
                        }}
                        >조율 완료</Link>
                    </div>
                </div>
                <Link to="/addSchedule">
                    <button 
                    className={styles.btn_add}
                    type='button'
                    >추가하기</button>
                </Link>
            </nav>
        <article className={styles.article}>
            <div 
            className={styles.message}
            // style={{display: id_max > -1 ? 'block' : 'none'}}
            >
                <span className={styles.text}>
                    조율이 완료된
                </span>
                <span className={styles.text}>
                    일정이 없어요
                </span>
            </div>
        </article>
    </div>
);

export default ArticleEnd;