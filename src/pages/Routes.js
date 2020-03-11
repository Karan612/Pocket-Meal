import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Home from './Home';
import NeedHelp from './NeedHelp';
import Volunteer from './Volunteer';
import Progress from './Progress';

const Router = () => { 
    return (
    <Switch>
        <Route path = "/" exact component = {Home} />                                                       
        <Route path = "/need-help" exact component = {NeedHelp} />
        <Route path = "/volunteer" exact component = {Volunteer} />
        <Route path = "/sign-up" exact component = {SignUpForm} />              
        <Route path = "/sign-in" exact component = {SignInForm} />
        <Route path = "/questions" exact component = {Progress} />
    </Switch>
    );
}

export default Router;