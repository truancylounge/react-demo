import React from 'react';
export default class Option extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}