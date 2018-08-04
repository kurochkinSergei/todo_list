import React, { Component } from 'react';

class TitleInput extends Component {
    constructor(props) {
        super(props)

        this.onTextChange = this.onTextChange.bind(this)
    } 

    onTextChange() {
        var val = this._titleInput.value
        this.props.onTextChange(val);
    }

    render() {
        return (
            <input value={ this.props.val }
                   className="title-input"
                   placeholder="Enter a task title"
                   ref={(a) => this._titleInput = a}
                   onChange={ this.onTextChange }/>
        )
    }
}

export default TitleInput