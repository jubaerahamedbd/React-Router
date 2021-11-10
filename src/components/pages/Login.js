import React, { Component } from 'react';

class Login extends Component {
    login=()=>{
        sessionStorage.setItem("userName","jubaer")
    }
    logout=()=>{
        sessionStorage.clear()
    }
    render() {
        return (
            <div>
                <button onClick={this.login}>LOGIN</button>
                <button onClick={this.logout}>LOGOUT</button>
            </div>
        );
    }
}

export default Login;