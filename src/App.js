import React, { Component } from 'react'
import AddTodo from './components/addtodo'
import TodoList from './components/todolist'
import Footer from './components/footer'

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './redux/actions'
import { connect } from 'react-redux'

class App extends Component {
	handleAddClick = (text) => {
		this.props.dispatch(addTodo(text))
	}
	handleToggleClick = (index) => {
		this.props.dispatch(toggleTodo(index))
	}
	handleFilterChange = (filter) => {
		this.props.dispatch(setVisibilityFilter(filter))
	}

	render(){
		return(
			<div id="app">
				<AddTodo onClick={ this.handleAddClick } />
				<TodoList onClick={ this.handleToggleClick } todos={ this.props.visibleTodos } />
				<Footer onFilterChange={ this.handleFilterChange } filter={ this.props.visibilityFilter } />
			</div>
		)
	}
}

function selectTodos(todos, filter){
	switch(filter){
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed)
		case VisibilityFilters.SHOW_ALL:
		default:
			return todos
	}
}

function select(state){
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	}
}

export default connect(select)(App)