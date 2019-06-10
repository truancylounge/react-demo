class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.toggleShowDetails = this.toggleShowDetails.bind(this)
        this.state = {
            detailText: 'Show details'
        }
    }
    toggleShowDetails() {
        this.setState((prevState) => {
            let text;
            if(prevState.detailText === 'Show details') {
                text = 'Hide details'
            } else {
                text = 'Show details'
            }

            return {
                detailText: text
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleShowDetails}>{this.state.detailText}</button>
                { this.state.detailText === 'Show details' && (
                        <p>Hey. There are some details you can now see!</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
