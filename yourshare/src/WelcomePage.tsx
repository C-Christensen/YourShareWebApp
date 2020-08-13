import React from "react";
import { pages } from "./App";
// import { Welcome } from "./WelcomeTable";
// import WelcomeTable from "./WelcomeTable";
import CustomBtn from './components/custom-btn/custom-btn.component';
import "./WelcomePage.css";

import ItemList from "./components/ItemList/ItemList"
import { IYourShareState, Person } from './redux/types';
import { connect } from 'react-redux';



interface WelcomeScreenProps {
  changePage: (page: pages) => void;

  you: Person;
}

class WelcomePage extends React.Component<WelcomeScreenProps> {
  render() {
    return (
      <div className = "wrapper">
        <div className = "left-side">
        <h1 className="move-left">Welcome, {this.props.you.name}</h1>
        <ItemList />
        
        {/* <WelcomeTable welcomeItems = {this.welcome()} /> */}
        </div>
          <div className = "right-side">
            <table className = "righttable" 
  
            
            >
              <tr>
                <th>
                  Your Items
                </th>
                <th>
                  Lent to
                </th>
              </tr>
              <tr>
                <td>
                  Add your first item
                </td>

                <td>
                  A friend
                </td>

              </tr>
            </table>
        
          <div className="button-area">
            <CustomBtn title="Add Item" page={pages.AddItemPage} navigation={this.props.changePage}/>
            <CustomBtn title="Manage Community" page={pages.CommunityPage} navigation={this.props.changePage}/>
          </div>
        
          </div>
      </div>
    );
  }  
    // Abduls code for the welcome table
    // welcome(): Welcome[] {
    //   return [
    //     {ItemsForBorrowing: "Blender", Lender: "Stacey"},
    //     {ItemsForBorrowing: "Rake", Lender: "Marcos"},
    //     {ItemsForBorrowing: "Car", Lender: "Marcos"},
    //     {ItemsForBorrowing: "Bike", Lender: "Cam"},
    //     {ItemsForBorrowing: "Drill", Lender: "Stacey"},
    //     {ItemsForBorrowing: "Ladder", Lender: "Marcos"},
    //     {ItemsForBorrowing: "Kayak", Lender: "Cam"},
    //     {ItemsForBorrowing: "The Office DVD Box Set", Lender: "Stacey"},
    //     {ItemsForBorrowing: "Cart", Lender: "Jim"}
    //   ]
    // }
}


// Map redux state to component state
// This function subscribes to all store updates and gets called when
// anything in the store changes. It return an object containing the store data you
// want to transmit as props to a component
// Here an object containing countValue is transmitted
function mapStateToProps(state: IYourShareState) {
  return {
    you: state.currentUser // "currentUser" in Redux state is 'you' on this page
  }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
  return {
    // no actions on this page / screen
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);

export { connectedComponent as WelcomePage }
