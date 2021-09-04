/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter, useHistory, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
//Containers
import Home from './containers/Home';
import Main from './containers/Main';
import Login from './components/Login';
import Signup from './components/Register';
import AuthHelpers from './utils/AuthHelper';

//Actions
import { getCurrentUser } from './actions/user';
import { logOut } from './actions/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
          AuthHelpers.isAuthenticated() ? (
            <Component {...props}/>
          ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const App = (props) => {
  const { user,  getCurrentUser, logOut} = props;

  useEffect(() => {
    if(AuthHelpers.isAuthenticated()) {
      getCurrentUser();
    }
  }, []);
  
  if(user && user.status === 0) {
    return <div className='w-full h-full justify-content-center align-center bg-white text-black font-mono'>
    <h1 className='text-3xl font-medium mt-4 mb-12 text-center'>Loading...</h1>
  </div>
  }
  const isAuthenticated = AuthHelpers.isAuthenticated() && user?.data ? true: false
  return (
    <div className='w-full h-screen bg-gray-80'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={(props) => <Main 
              isAuthenticated={isAuthenticated} 
              type="explore" 
              user={user}
              logoutAction={logOut} {...props}/>}
            />
            <PrivateRoute exact path="/my" component={(props) => 
              <Main 
                isAuthenticated={isAuthenticated} 
                type="my_articles" 
                user={user}
                {...props} 
              />
            }/>
            <Route exact path="/article/:id" component={
              (props) => <Main i
                isAuthenticated={isAuthenticated} 
                type="article" 
                {...props}
                user={user}
              />
            }/>
            <PrivateRoute exact path='/create' component= {() => <Main type='create' user={user} isAuthenticated={isAuthenticated} logoutAction={logOut}/>}/>
            {
              AuthHelpers.isAuthenticated() ?  <Redirect to="/"/> :
               <Route exact path='/signup' component={Signup} history={useHistory()}/>
            }
            {
              AuthHelpers.isAuthenticated() ? <Redirect to="/"/> :
              <Route exact path="/login" component={Login} history={useHistory()} />
            }
          </Switch>
        </BrowserRouter>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user_info
  }
}

export default connect(mapStateToProps, {
  getCurrentUser,
  logOut
})(App);
