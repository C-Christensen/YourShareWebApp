import React from "react";
import { pages } from "./App";
import CommunityTable from "./community-table/CommunityTable"
import {Community} from "./community-table/CommunityTable"
import "./community-table/CommunityTable.css"
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { Checkbox } from 'office-ui-fabric-react';


interface CommunityScreenProps {
  changePage: (page: pages) => void;
}

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}


// Add spacing between checkboxes
const stackTokens = { childrenGap: 10 };

function _alertClicked(): void {
  alert('It doesn\'t work yet!');
}

export class CommunityPage extends React.Component<CommunityScreenProps, IButtonExampleProps> {
  render() {
    return (
      <div>      
          <div onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          <h1>
             <img  className="backButton" src={require('./backbutton.png')}  alt="back button"/>
             Manage community</h1>
          </div>
          
          
         <CommunityTable communityItems={this.community()} />
         <Stack horizontal tokens={stackTokens}>
           <PrimaryButton text="Add Friend" onClick={_alertClicked} allowDisabledFocus />
         </Stack>
         <div className="checkbox-fluentui">
            <Stack tokens={stackTokens}>
              <Checkbox label="Text me when someone wants to borrow an item" defaultChecked />
              <Checkbox label="Allow best friends to borrow without an approval" defaultChecked/>
              <Checkbox label="Block friends of friends from seeing my items"/>
            </Stack>
         </div>
         
         {/* {this.addFriend()} */}
         {/* {this.checkbox()} */}
          
      </div>

    );
  }

  community():Community[] {
    return[
      {friendName: 'Stacey', borrowed: 'None', lent: 'None'},
      {friendName: 'Marcos', borrowed: 'None', lent: 'None'},
      {friendName: 'Cam', borrowed: 'None', lent: 'None'},
      {friendName: 'Jim', borrowed: 'None', lent: 'None'}
    ]
  }

  // private checkbox(){
  //   return(
  //     <div className="checkbox-wrapper">
  //       <p><label><input type="checkbox" className="checkbox"></input> Text me when someone wants to borrow an item</label></p>
  //       <p><label><input type="checkbox" className="checkbox"></input> Allow best friends to auto borrow without approval</label></p>
  //       <p><label><input type="checkbox" className="checkbox"></input> Block friends of friends from seeing my items</label></p>
  //     </div>
  //   )
  // }

  // private addFriend(){
  //   return(
  //     <input className= "submitButton" type="submit" value="Add friend"></input>
  //   )
  // }


}


function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
  console.log(`The option has been changed to ${isChecked}.`);
}









