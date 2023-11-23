import { ChromePicker } from 'react-color';
import { useState } from 'react';
import { useRef } from 'react';
import styles from 'styles/ColorPicker.module.css';

function ColorPicker (props) {
    const [isSelected, setIsSelected] = useState(
        [false, true, false, false, false, false, false]
    );
    const handleSelect = (index) => {
        let newArray = [...isSelected];
        for (let i = 0; i < 7; i++) {
            if (i === index) {
                newArray[i] = true;
            } else {
                newArray[i] = false;
            }
        }
        setIsSelected(newArray);
    }

    const colorRef = useRef([]);
    const colors = ['#99C0F6', '#F699CB', '#D3F699', '#F6ED99', '#B199F6', '#F6BA99']
    const colorBtns = colors.map((color, index) => 
    <button
    key={index}
    className={`${styles.btns} ${isSelected[index + 1] ? styles.check : styles.notCheck}`} 
    type='button'
    style={{backgroundColor: color}}
    ref={thisRef => colorRef.current[index + 1] = thisRef}
    onClick={()=>{
        // e.preventDefault();
        handleSelect(index + 1);
        props.onChangeColor(colorRef.current[index + 1].style.backgroundColor);
    }}></button>)

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useState('#fff');
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };
    const handleClose = () => {
        setDisplayColorPicker(false);
    };
    const handleChange = (color) => {
        setColor(color.rgb);
    };

    let plusIcon = '+';
    if (isSelected[0] === true) {
        plusIcon = null;
    } else {
        plusIcon = '+';
    }

    return (
    <div className={styles.colorPicker}>
        <button 
        className={`
        ${styles.btns} 
        ${styles.addBtn} 
        ${isSelected[0] ? styles.check : styles.addBtnNotCheck}
        `} 
        type='button'
        style={{backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`}}
        ref={thisRef => colorRef.current[0] = thisRef}
        onClick={()=>{
            handleClick(); 
            handleSelect(0);
        }}
        >{plusIcon}</button>
        { displayColorPicker ? <div className={ styles.popover }>
        <div 
        className={ styles.cover } 
        onClick={()=>{ 
            handleClose();
            props.onChangeColor(colorRef.current[0].style.backgroundColor);
        }}/>
        <ChromePicker 
        color={color}
        disableAlpha={true}
        onChange={ handleChange } />
        </div> : null }
        {colorBtns}
    </div>
    )
}



export default ColorPicker;
