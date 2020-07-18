import React, {Component} from "react"
import "./CommunityTable.css"
import CheckboxBasicExample from "./components/checkbox"

export interface Community{
    friendName: string
    borrowed: string
    lent: string
}

interface CommunityTableProps{
    communityItems: Community[]
}

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
            <td><CheckboxBasicExample className="friend-checkbox"/></td></tr>
            
            )
                
        )
    }
}
export default CommunityTable