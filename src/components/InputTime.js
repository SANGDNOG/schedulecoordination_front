const InputTime = () => {
    const styles = {
        margin: '30px 30px',
        width: '300px',
        height: '300px',
        display: 'flex',
        flex_direction: 'column'
    }

    const btn_style = {
        // display: 'inline-block',
        marginTop: '9px',
        marginLeft: '10px',
        width: '50px',
        height: '30px'
    }

    return (
        <div style={styles}>
            <div>
                <span>시작 시간</span>
                <input type="time" />
            </div>
            <div>
                <span>끝 시간</span>
                <input type="time" />
            </div>
            <button style={btn_style}>입력</button>
        </div>
    )
}

export default InputTime;
