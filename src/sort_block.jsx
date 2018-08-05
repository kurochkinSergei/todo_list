import React, { Component } from 'react'
import Button from './button'

class SortBlock extends Component {
    render() {
       return ( 
            <div className="sort-block">
                Sort tasks by title 
                <Button className="button" char="8593"  onClick={() => this.props.sortTasks("asc")}/>
                <Button className="button" char="8595" onClick={() => this.props.sortTasks("desc")}/>
            </div>
        )
    }
}

export default SortBlock