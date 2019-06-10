class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: ++prevState.count 
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: --prevState.count
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app') );

// let count = 0;
// const addOne = () => {
//     count++, renderCounterApp()
// }

// const minusOne = () => {
//     count--, renderCounterApp()
// }
// const reset = () => {
//     count = 0, renderCounterApp()
// }


// const renderCounterApp = () =>  {
//     const template3 = (
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={addOne} class="button">+1</button>
//             <button onClick={minusOne} class="button">-1</button>
//             <button onClick={reset} class="button">reset</button>
//         </div>
//     )
//     console.log(template3)
//     ReactDOM.render(template3, document.getElementById('app3') );
// }

// renderCounterApp()