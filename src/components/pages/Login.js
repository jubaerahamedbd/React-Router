import React, { Component } from 'react';

class Login extends Component {
    login=()=>{
        sessionStorage.setItem("userName","jubaer")
    }
    render() {
        return (
            <div>
                <button onClick={this.login}>LOGIN</button>
            </div>
        );
    }
}

export default Login;