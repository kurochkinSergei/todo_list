import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <button className={this.props.className} 
                    type={this.props.type}>
                {this.props.text}            
            </button>
        )
    }
}

export default Button