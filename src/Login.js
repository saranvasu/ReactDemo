import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames';
import {Router,Route,Link, Redirect, withRouter } from 'react-router-dom'



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.onusernameChange = this.onusernameChange.bind(this);
        this.onpasswordChange = this.onpasswordChange.bind(this);
        this.state = {
            username: '',
            password: '',
            loggedin: 0,
        }
    }

    handleLogin() {
        this.setState({username: 'sddd'});
        this.setState({loggedin: 1});      
        
    }

    handleSignUp() {

    }

    onusernameChange (event) {
        this.setState({username: event.target.value});
        console.log(this.state.username);
    }

    onpasswordChange (event) {
        this.setState({password: event.target.value});
        console.log(this.state.password);
    }

    render () {

        if (this.state.loggedin === 1) return (
            <Redirect  to={{pathname: "/SignUp",}}/>
        );
        return (
            
            <div class='center'>   
                                  
                <TextField id='usn' 
                label = 'Username' 
                margin="normal"
                onChange = {this.onusernameChange}
                />
                <br/><br/> 
                <TextField 
                id='usn' 
                label = 'Password' 
                onChange = {this.onpasswordChange}                
                />
                <br/><br/>
                <Button onClick={this.handleLogin}>Login</Button>
                <Button component={Link} to={"/Signup"}>Sign up</Button>

                <label> {this.state.username} </label>
                <label> {this.state.password} </label>

            </div>
        );
    }
} 

export default Login;