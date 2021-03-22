import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import AuthProvider from './Authentication.js';

export function App(){
 return( 
  <AuthProvider>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  </Router>
</AuthProvider>
 )
}

export default App