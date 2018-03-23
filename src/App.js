import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseForm from './form';
import Expense from './expense';
import ExpenseDisplay from './ExpenseDisplay';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { expenses: [] };
    this.addExpense = this.addExpense.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

addExpense(expense){
  alert('the button was clicked');
  this.setState((props, prev)=>{
    return{
      expenses: [...this.state.expenses,expense] 
    }
  })
}

onRemoveClick(expenseIndex){
  console.log(expenseIndex)
  this.setState((prev)=>{
        let newExpenses = prev.expenses.filter((item, i) => i !== expenseIndex);
        console.log(newExpenses);
        return { expenses: newExpenses};
      }, ()=>console.log(this.state.expenses));
};

  render() {
    return (
      <div className="App">
      <ExpenseForm addExpense={this.addExpense}/>
      <ExpenseDisplay expenses={this.state.expenses} onRemoveClick={this.onRemoveClick}/>
      </div>
    );
  }
}

export default App;
