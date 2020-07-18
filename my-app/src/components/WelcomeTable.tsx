import React, {Component} from "react"
import "../css/WelcomePage.css";


export interface welcome {
    ItemsForBorrowing: string
    Lender: string
}

interface WelcomeTableProps {
    welcomeItems: welcome[]
}

class WelcomeTable extends Component<WelcomeTableProps, welcome> {
    render(){
        return (
            <table className="welcome-table">
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
