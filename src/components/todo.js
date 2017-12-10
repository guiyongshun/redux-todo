import React, { Component } from 'react'

export default class AddTodo extends Component {
    handleClick = () => {
        this.props.onClick(this.props.index)
    }
    render(){
        return (
            <li style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
                onClick={ this.handleClick }
                index={ this.props.index }
            >
                { this.props.text }
            </li>
        )
    }
}