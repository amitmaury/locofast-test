import React from 'react';
import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import UserList from '../components/users/UserList';
import { UserDetails } from '../components/users/UserDetails';
import NavigationBar from '../components/ui/NavigationBar';
import {UsersPost} from "../components/users/UsersPost";


export const RouterPage = ()=>{
    return (
        <>
        <Router >
        <NavigationBar />
            <Switch>
            <Route  exact
                path="/"
                render={() => {
                    return (
                      
                      <Redirect to="/users" />
                    )
                }}/>
                       <Route  exact path="/users" component={UserList} />
            <Route  path="/users/:id/page" component={UserDetails} />
            <Route  path="/users/:id/posts/page" component={UsersPost} />
           
          </Switch>
        </Router>
        </>
    )
}