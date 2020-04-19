import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from '../components/users/UserList';
import { UserDetails } from '../components/users/UserDetails';
import NavigationBar from '../components/ui/NavigationBar';
import { Home } from '../components/Home';

export const RouterPage = ()=>{
    return (
        <>
        <Router >
        <NavigationBar />
            <Switch>
            <Route exact path="/" component={UserList} />
            <Route  path="/userDetails" component={UserDetails} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
        </>
    )
}