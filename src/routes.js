import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';

function routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
        </BrowserRouter>
    )
}

export default routes;