import React from "react";
import { pages } from "./App";
import CommunityTable from "./CommunityTable"
import {Community} from "./CommunityTable"
import Header from './components/header/header';
import ButtonDefaultExample from "./components/Button"
import CheckboxBasicExample from "./components/checkbox"

interface CommunityScreenProps {
    changePage: (page: pages) => void;
}

export class CommunityPage extends React.Component<CommunityScreenProps> {
    render() {
      return (

        <div className="community-wrapper">
            <Header headerTitle="Manage Community" changePage={this.props.changePage}/>
            <CommunityTable communityItems={this.community()} />
            <ButtonDefaultExample className ="add-friend" text="Add friend" page={pages.CommunityPage} navigation={this.props.changePage} />
            <CheckboxBasicExample className="checkbox1" label="Text me when someone wants to borrow an item"/>
            <CheckboxBasicExample className="checkbox2" label="Allow best friends to auto borrow without approval"/>
            <CheckboxBasicExample className="checkbox3" label="Block friends of friends from seeing my items"/>
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

}