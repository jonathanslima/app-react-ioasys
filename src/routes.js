import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';
import Details from './pages/details'

function routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/details" component={Details}></Route>
        </BrowserRouter>
    )
}

export default routes;