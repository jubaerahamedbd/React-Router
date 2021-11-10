import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Login from './pages/Login';
class MyRoute extends Component {
    render() {
        return (
            <div>
                <Routes>
                    
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/pageone" element={<PageOne />} />
                    <Route exact path="/pagetwo" element={<PageTwo />} />
                    <Route exact path="/pagethree" element={<PageThree />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        );
    }
}

export default MyRoute;