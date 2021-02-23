import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import MainScreen from './pages/MainScreen'
import Register from './pages/Register'
import Search from './pages/Search';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainScreen}/>
                <Route path="/register" component={Register}/>
                <Route path="/search" component={Search}/>
            </Switch>
        </BrowserRouter>
    );
}