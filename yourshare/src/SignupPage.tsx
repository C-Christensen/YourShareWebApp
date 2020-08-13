import React from "react";
import { pages } from "./App";
import icon from "./images/YS_icon.png";
import AnimatedFunc from './components/animated/animated';
import "./SignupPage.css"

import { createJoinAction } from "./redux/actions"
import { IYourShareState } from './redux/types';
import { connect } from 'react-redux';

interface SignupScreenProps {
  changePage: (page: pages) => void;
  saveJoinInfo: (n: string, p: string, z: string) => void;
}

class SignupPage extends React.Component<SignupScreenProps> {
  nameRef: React.RefObject<HTMLInputElement>;
  phoneNumRef: React.RefObject<HTMLInputElement>;
  zipCodeRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.nameRef = React.createRef();
    this.phoneNumRef = React.createRef();
    this.zipCodeRef = React.createRef();
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.nameRef.current == null || this.phoneNumRef.current == null || this.zipCodeRef.current == null) {
      alert('INTERNAL ERROR: missing reference!');
      return;
    }
    this.props.saveJoinInfo(this.nameRef.current.value, this.phoneNumRef.current.value, this.zipCodeRef.current.value);
    this.props.changePage(pages.WelcomePage)
  }

  render() {
    return (
      // wrapper div
      <div className="wrapper">

        <div className="container">
          <div className="left-side">
      
            <AnimatedFunc />
            <img className="logo" src={icon} alt="icon" />
          </div>

          <div className="right-side">
            <h2>Join your community</h2>
            <h3>Sign-up</h3>
            <form onSubmit={this.handleSubmit} className="form">
              <input className="input" name="username" placeholder="Username:" ref={this.nameRef}/>
              <input className="input" name="phone-number" placeholder="Phone number:" ref={this.phoneNumRef}/>
              <input className="input" name="zip-code" placeholder="Zip code:" ref={this.zipCodeRef} />
              <input type="submit" value="Join" />
            </form>
            <p onClick={(e) => this.props.changePage(pages.WelcomePage)}>
              Sign-in
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// Map redux state to component state
function mapStateToProps(state: IYourShareState) {
  return {
    // no data props
  }
}

// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
  return {
    saveJoinInfo: (n: string, p: string, z: string) => dispatch(createJoinAction(n, p, z))
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);

export { connectedComponent as SignupPage }