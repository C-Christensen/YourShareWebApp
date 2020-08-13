import React from "react";
import './custom-input.styles.css';

interface CustomInputProps {
    label: string,
    placeholder?: string
}

const CustomInput = (props:CustomInputProps) => {
    return (
        <div className='custom-input'>
            <input id={props.label} type="text" placeholder={props.label}/>
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    )
}

export default CustomInput;