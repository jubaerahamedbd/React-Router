import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class MyNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pageone">Page One</Link></li>
                    <li><Link to="/pagetwo">Page Two</Link></li>
                    <li><Link to="/pagethree">Page Three</Link></li>
                </ul>
            </div>
        );
    }
}

export default MyNavigation;