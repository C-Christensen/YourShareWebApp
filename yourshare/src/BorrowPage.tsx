import React from 'react';
import { pages } from "./App";
import CustomInput from './components/custom-input/custom-input.component';
import CustomBtn from './components/custom-btn/custom-btn.component';
import Header from './components/Header/header.component';
import './BorrowPages.styles.css';
import blender from './assets/blender.png';


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
                    <CustomInput label="Item Name" placeholder="Blender"/>
                    <CustomInput label="Type" placeholder="Kitchen"/>
                    <CustomInput label="Lender" placeholder="Stacey"/>
                    <textarea className="text-area"
                        defaultValue="A pretty great blender! The lid is a little loose so make sure to hold it down when using to avoid a smoothie disaster.">
                    </textarea>
                </div>
            </div>
       
            <div className="right">
                <img className='blender' src={blender} alt="blender"/>
                <div className="button-area">
                    <CustomBtn title="Cancel" page={pages.WelcomePage} navigation={this.props.changePage}/>
                    <CustomBtn title="Request To Borrow" page={pages.WelcomePage} navigation={this.props.changePage}/>
                </div>
            </div>
        </div>

    </div>
    );
}
}


export default BorrowPage;