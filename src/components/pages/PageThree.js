import React, { Component } from 'react';
import {Navigate} from 'react-router-dom'

class PageThree extends Component {
    
    render() {
        if (sessionStorage.getItem("userName") == null) {
            return <Navigate to="/login" />
        }
       else{
        return (
            <div>
                <h1>Page Three</h1>
               
            </div>
        );
       }
    }
}

export default PageThree;