import React, { Component } from 'react';
import Expense from './expense';

class ExpenseDisplay extends Component{

onRemoveClick=(indexExpense)=>{
    console.log(indexExpense);
    this.props.onRemoveClick(indexExpense);
}

renderExpenses(){
    return this.props.expenses.map((expense, i)=><Expense key={i} indexExpense = {i} /* {...expense} */ amount={expense.amount} cat={expense.cat} desc={expense.desc} onRemoveClick={this.onRemoveClick}/>)
}

    render(){
        return(
            <ul>
            {this.renderExpenses()}
            </ul>
        );
    }
}

export default ExpenseDisplay;