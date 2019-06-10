import React from 'react';
import ReactDOM from 'react-dom';

import AddOption from './AddOption';
import Option from './Option';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: ['One', 'Two', 'Four', 'Five']
        }
        
    }
    render() {
        const title = 'Indecision'
        console.log(`Rendeing title: ${title}`);
        const subtitle = 'A test app'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} />
                <Options options={this.state.options} />
                <AddOption />
                <LoginWidget />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>
                    {this.props.options.map(option => <Option key={option} optionText={option} />)}
                </ol>
            </div>
        )
    }
}

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>
}

function LoginGreeting(props) {
    return <h3>Please Sign Up</h3>
}

function LogoutGreeting(props) {
    return <h3>Welcome Back</h3>
}

class GreetingWidget extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.isLoggedIn ? <LogoutGreeting/> : <LoginGreeting/>;
    }
}

class LoginWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};

        this.loginEvent = this.loginEvent.bind(this);
        this.logoutEvent = this.logoutEvent.bind(this);
    }

    loginEvent(state) {
        this.setState({isLoggedIn: true});
    }

    logoutEvent(state) {
        this.setState({isLoggedIn: false});
    }

    render() {
        return (
            <div>
                <GreetingWidget isLoggedIn={this.state.isLoggedIn} />
                {this.state.isLoggedIn ? <LogoutButton onClick={this.logoutEvent}/>  : <LoginButton onClick={this.loginEvent}/> }
            </div>
        );
    }
}