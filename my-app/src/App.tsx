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

class App extends React.Component {
  render() {
  return (
   <>
   <Router>
     <Switch>
       <Route exact path="/button" component={Button}/>
     </Switch>
   </Router>
   </>
  )
}}

export default App;
