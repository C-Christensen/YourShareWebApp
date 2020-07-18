import React from 'react';
import { pages } from "./App";
import TextFieldBasicExample from "./components/TextField"
import ButtonDefaultExample from "./components/Button"
import Header from './components/header/header';
import './css/BorrowPages.css';
import blender from './images/blender.png';


interface BorrowPageProps {
    changePage: (page: pages) => void;
}
  
export class BorrowPage extends React.Component<BorrowPageProps> {
render() {
    return (
    <div>
        <Header headerTitle="Borrow Item" changePage={this.props.changePage}/>
        <div className="wrapper">
            <div className="left">
                <div className="inputs-area">
                    <TextFieldBasicExample label="Item Name" placeholder="Blender" />
                    <TextFieldBasicExample label="Type" placeholder="Kitchen"/>
                    <TextFieldBasicExample label="Lender" placeholder="Stacey" />
                    <textarea className="text-area"
                        defaultValue="A pretty great blender! The lid is a little loose so make sure to hold it down when using to avoid a smoothie disaster.">
                    </textarea>
                </div>
            </div>
       
            <div className="right">
                <img className='blender' src={blender} alt="blender"/>
                <div className="button-area">
                    <ButtonDefaultExample className="button" text="Cancel" page={pages.WelcomePage} navigation={this.props.changePage} />
                    <ButtonDefaultExample className="button" text="Request to borrow" page={pages.WelcomePage} navigation={this.props.changePage} />
                </div>
            </div>
        </div>

    </div>
    );
}
}


export default BorrowPage;