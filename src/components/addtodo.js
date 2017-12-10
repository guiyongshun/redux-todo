import React, { Component } from 'react'

export default class AddTodo extends Component {
    handleClick = () =>{
        const str = this.textInput.value.trim()
        this.props.onClick(str)
        this.textInput.value = ''
    }
    render(){
        return (
            <div>
                <input type="text" ref={ input => {this.textInput = input} } />
                <button onClick={ this.handleClick }>Add</button>
            </div>
        )
    }
}