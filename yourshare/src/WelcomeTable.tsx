import React, {Component} from "react"
import "./WelcomeTable.css"

export interface Welcome {
    ItemsForBorrowing: string
    Lender: string
}

interface WelcomeTableProps {
    welcomeItems: Welcome[]
}

class WelcomeTable extends Component<WelcomeTableProps, Welcome> {
    render(){
        return (
            <table id = "welcomeTable" className="welcomeTable">
                <thead>
                    <tr><th>Items for Borrowing</th><th>Lender</th></tr>
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
            this.props.welcomeItems.map((Items)=>
            <tr><td className="itemsForBorrowingColumn">{Items.ItemsForBorrowing}</td><td>{Items.Lender}</td></tr>
            )
        )
    } 
}

export default WelcomeTable
