import React, { Component } from 'react';
import SingleInput from './single-input.js';

class ExpenseForm extends Component{
    constructor(props){
        super(props);
        this.state={amount: 0, cat:"", desc: ""};
        this.onChange=this.onChange.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onChange(e){
        this.setState({[e.target.id]:e.target.value})
    };

    onBtnClick(){
        this.props.addExpense(this.state);
        this.setState({amount:0, cat:"", desc:""}, ()=>{
            console.log(this.state);
        })
    }

    render(){
        return(
            <div>
                <form>
                    <SingleInput  id="amount" inputType="number" placeholder="money spent" content={this.state.amount} controlFunc={this.onChange}/>
                    <SingleInput  id="cat" inputType="text" placeholder="category" content={this.state.cat} controlFunc={this.onChange}/>
                    <SingleInput  id="desc" inputType="text" placeholder="description" content={this.state.desc} controlFunc={this.onChange}/>
                    <button type="button" onClick={this.onBtnClick}>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;