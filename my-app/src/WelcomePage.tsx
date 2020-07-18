import React from "react";
import { pages } from "./App";
import { welcome } from "./components/WelcomeTable";
import WelcomeTable from "./components/WelcomeTable";
import ButtonDefaultExample from "./components/Button"
import "./css/WelcomePage.css";


interface WelcomeScreenProps {
    changePage: (page: pages) => void;
  }
  
  export class WelcomePage extends React.Component<WelcomeScreenProps> {
    render() {
      return (
        <div className="wrapper">
            <div className="welcome-left-side">
                <h1 className="Welcome-h1">Welcome, Camila!</h1>
                <WelcomeTable  welcomeItems = {this.welcome()} />
            </div>
            <div className="welcome-right-side">
            <table className = "right-table">
                <tr><th>Your Items</th><th>Lent to</th></tr>
                <tr><td>Add your first item</td><td>A friend</td></tr>
            </table>
            <ButtonDefaultExample className ="add-item-btn" text="Add item" page={pages.AddItemPage} navigation={this.props.changePage} />
            <ButtonDefaultExample className="manage-comm-btn" text="Manage Community" page={pages.CommunityPage} navigation={this.props.changePage} />
            </div>
        </div>
      );
    }

    welcome(): welcome[] {
        return [
          {ItemsForBorrowing: "Blender", Lender: "Stacey"},
          {ItemsForBorrowing: "Rake", Lender: "Marcos"},
          {ItemsForBorrowing: "Car", Lender: "Marcos"},
          {ItemsForBorrowing: "Bike", Lender: "Cam"},
          {ItemsForBorrowing: "Drill", Lender: "Stacey"},
          {ItemsForBorrowing: "Ladder", Lender: "Marcos"},
          {ItemsForBorrowing: "Kayak", Lender: "Cam"},
          {ItemsForBorrowing: "The Office DVD Box Set", Lender: "Stacey"},
          {ItemsForBorrowing: "Cart", Lender: "Jim"}
        ]
    }  

}




export default WelcomePage;