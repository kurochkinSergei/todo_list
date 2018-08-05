import React, { Component } from 'react'

class Button extends Component {
    constructor (props) {
        super(props)

        this.state = {
            btnText: String.fromCharCode(this.props.char),
        }    
    }

    componentDidUpdate(prevProps) {
        if (this.props.char !== prevProps.char) {
            this.setState({
                btnText: String.fromCharCode(this.props.char)
            })
        }
    }

    render() {
        return (
            <button className={this.props.className} 
                    type={this.props.type}
                    onClick={this.props.onClick}>
                { this.state.btnText }            
            </button>
        )
    }
}

export default Button