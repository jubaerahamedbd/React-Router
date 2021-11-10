import React, { Component } from 'react';
import {Navigate} from 'react-router-dom'

class PageOne extends Component {
    render() {
        if (sessionStorage.getItem("userName") == null) {
            return <Navigate to="/login" />
        } else {
            return (
                <div>
                    <h1>Page One</h1>
                </div>
            );
        }
    }
}

export default PageOne;