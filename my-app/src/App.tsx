import React, {   Component  } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Button from '././composants/buttonAdd/ButtonAdd';
import Login from '././pages/login/LoginPage';

class App extends React.Component {
  render() {
  return (
   <>
   <Router>
     <Switch>
       <Route exact path="/button" component={Button}/>
       <Route  path="/login" component={Login}/>
     </Switch>
   </Router>
   </>
  )
}}

export default App;
