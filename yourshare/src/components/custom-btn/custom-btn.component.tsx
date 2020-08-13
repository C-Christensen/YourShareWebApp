import React from 'react';
import { pages } from "../../App";


import './custom-btn.style.css';

interface BtnProps {
    title: string,
    navigation: (page: pages) => void,
    page: pages
}


const CustomBtn = (props: BtnProps) => {
    return (
        <div>
            <button className="button" onClick={(e) => {props.navigation(props.page)} }>{props.title}</button>
        </div>
    )
}

export default CustomBtn;