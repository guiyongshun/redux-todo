import React, { Component } from 'react'

export default class Footer extends Component {
    handleClick = () => {
        this.props.onClick(this.props.index)
    }
    renderFilter(filter, name){
        if(filter === this.props.filter){
            return <span>{ name }</span>
        }
        return (
            <a href="#" onClick={
                e => {
                    e.preventDefault()
                    this.props.onFilterChange(filter)
                }
            }>
                { name }
            </a>
        )
    }
    render(){
        return (
            <div id="footer">
                { 'SHOW: ' }
                { this.renderFilter('SHOW_ALL', 'All') }
                { ' , ' }
                { this.renderFilter('SHOW_COMPLETED', 'Completed') }
                { ' , ' }
                { this.renderFilter('SHOW_ACTIVE', 'Active') }
                { '.' }
            </div>
        )
    }
}