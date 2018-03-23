import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleInput extends Component{
    render(){
        return(
            <div>
                <lable>{this.props.title}</lable>
                <input type={this.props.inputType} 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.controlFunc}
                    value={this.props.content}
                    id={this.props.id}
                    />
            </div>
        );
    }
}

export default SingleInput;

SingleInput.PropTypes={
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    content: PropTypes.isRequired,
    id: PropTypes.number.isRequired
}