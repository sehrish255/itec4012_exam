import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { NewPost } from './components/pages/NewPost';
import { IgFeed } from './components/pages/IgFeed';
import { IgHomePage } from './components/pages/IgHomePage';
import {LoginPage} from './components/pages/LoginPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <IgFeed />
        </Route>
        <Route path="/me">
           <IgHomePage />
        </Route>
        <Route path="/login">
        <LoginPage/>
        </Route>
        <Route path='/newPost'>
          <NewPost/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;