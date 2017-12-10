import React, { Component } from 'react'
import Todo from './todo'

export default class TodoList extends Component {
    render(){
        return (
            <ul>
                {
                    this.props.todos.map((item, index) => {
                        return <Todo onClick={ this.props.onClick } completed={ item.completed } text={ item.text } index={ index } key={ index }/>
                    })
                }
            </ul>
        )
    }
}