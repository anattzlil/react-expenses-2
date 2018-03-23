import React, {Component} from 'react';

class Expense extends Component{
    constructor(props){
        super(props);
        this.state = { index: this.props.indexExpense, amount: this.props.amount, cat: this.props.cat, desc: this.props.desc}
    }

    onRemoveClick=()=>{
        console.log(this.state)
        this.props.onRemoveClick(this.state.index);
    }

    render(){
        return(
            <div>
                {this.state.amount}, {this.state.cat}, {this.state.desc}
                <button onClick={this.onRemoveClick}>remove</button>
            </div>
        );
    }
}

export default Expense;