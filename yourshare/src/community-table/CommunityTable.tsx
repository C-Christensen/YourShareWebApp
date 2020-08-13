import React, {Component} from "react"
import "./CommunityTable.css"
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';


export interface Community{
    friendName: string
    borrowed: string
    lent: string
}

interface CommunityTableProps{
    communityItems: Community[]
}

const stackTokens = { childrenGap: 10 };

class CommunityTable extends Component<CommunityTableProps, Community> {
    render(){
        return(
            <table className="community-table">
                <thead>
                    <tr><th>Friends</th><th>Item currently borrowed</th>
                    <th>Item currently lent</th><th>Best friend</th></tr>
                </thead>
                <tbody>
                    {this.dataRows() 
                    }
                </tbody>
            </table>
        )
    }

    private dataRows(){


        return(
            this.props.communityItems.map((items)=>
            <tr><td>{items.friendName}</td><td><i>{items.borrowed}</i></td><td><i>{items.lent}</i></td>
            <td><Stack className= "friend-checkbox" tokens={stackTokens}>
              <Checkbox/></Stack></td></tr>
            ) 
        )
    }
}
export default CommunityTable
