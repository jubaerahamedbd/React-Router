import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom'
class MyNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }} to="/">Home</NavLink></li>
                    <li><NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }} to="/pageone">Page One</NavLink></li>
                    <li><NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }} to="/pagetwo">Page Two</NavLink></li>
                    <li><NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }} to="/pagethree">Page Three</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default MyNavigation;