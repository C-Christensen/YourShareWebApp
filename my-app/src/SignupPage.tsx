import React from "react";
import { pages } from "./App";
import icon from "./images/YS_icon.png";
import TextFieldBasicExample from "./components/TextField"
import ButtonDefaultExample from "./components/Button"
import "./css/SignupPage.css"


interface SignupScreenProps {
    changePage: (page: pages) => void;
  }


  
  export class SignupPage extends React.Component<SignupScreenProps> {

    render() {
      return (
        // wrapper div
        <div className="wrapper">
            <div className="left-side">
                <h1 className="welcome-h1">YourShare</h1>
                <img className="logo" src={icon} alt="icon" />
            </div>
            <div className="right-side">
                <h2>Join your community</h2>
                <h3>Sign-up</h3>
                <div className="text-fields">
                <TextFieldBasicExample label="Name" placeholder="Username: " />
                <TextFieldBasicExample label="Numer" placeholder="Phone Number: " />
                <TextFieldBasicExample label="Zipcode" placeholder="Zip code: " />
                <ButtonDefaultExample className="button" text="Join" page={pages.WelcomePage} navigation={this.props.changePage} />
                </div>
            </div>
        </div>

      );
    }
}


export default SignupPage;