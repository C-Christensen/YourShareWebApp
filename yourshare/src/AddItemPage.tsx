import React from "react";
import { pages } from "./App";
import './AddItemPage.css';
import CustomInput from './components/custom-input/custom-input.component';
import CustomBtn from './components/custom-btn/custom-btn.component';
import Header from './components/Header/header.component';
import Upload from '././assets/upload.png';

interface AddItemScreenProps {
  changePage: (page: pages) => void;
}

export class AddItemPage extends React.Component<AddItemScreenProps> {
  render() {
    return (
      <div>
        <Header headerTitle="Add Item" changePage={this.props.changePage}/>
      
        <div className="wrapper">

          <div className="left">
            <div className="inputs-area">
              <CustomInput label="Item Name"/>
              <CustomInput label="Type"/>
              <textarea className="text-area" placeholder="Description:"/>
            </div>
          </div>

          <div className="right">
            <div>
              <img className='upload' src={Upload} alt="upload"/>
              <CustomBtn title="Upload Picture" page={pages.AddItemPage} navigation={this.props.changePage}/> 
            </div>
            <div className="button-area">
              <CustomBtn title="Cancel" page={pages.WelcomePage} navigation={this.props.changePage}/>
              <CustomBtn title="Add Item" page={pages.WelcomePage} navigation={this.props.changePage}/>
            </div>
          </div>

        </div>

      </div>
    );
  }

  private changeScreen = (nextPage: pages) => {
    this.setState((state, props) => ({
      currentPage: nextPage
    }));
  };
}
