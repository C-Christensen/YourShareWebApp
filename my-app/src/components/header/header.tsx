import React from 'react'
import backbutton from '../../images/backbutton.png';
import { pages } from "../../App";

import './header.css';


interface HeaderProps {
    headerTitle: string,
    changePage: (page: pages) => void;
}

const Header = (props: HeaderProps) => {
    return (
        <div>
            <div className="container"onClick={(e) =>props.changePage(pages.WelcomePage)}>
            <img alt="arrow to go back" className="back-arrow"src={backbutton}/>
            <p className="title">{props.headerTitle}</p>
            </div>
        </div>
    )
}

export default Header;