import React, { Component } from 'react';
import {Navigate} from 'react-router-dom'

class Home extends Component {
    render() {
        if (sessionStorage.getItem("userName") == null) {
            return <Navigate to="/login" />
        }
        else {
            return (
                <div>
                    <h1>Home </h1>
                </div>
            );
        }
    }
}

export default Home;