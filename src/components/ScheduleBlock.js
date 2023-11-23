// import { useState } from 'react';
import styles from 'styles/ScheduleBlock.module.css'

const ScheduleBlock = (props) => {
    return (
        <div 
        className={styles.scheduleBlock}
        style={{borderLeft: `9px solid ${props.schedule.color}`}}
        >
            <div 
            className={styles.color}
            style={{backgroundColor: `${props.schedule.color}`}}
            ></div>
            <span className={styles.title}>
                {props.schedule.title}
            </span>
        </div>
    )
}

export default ScheduleBlock;
