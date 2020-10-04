import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Login from './components/Login/Login';
import CreateAccount from './components/CreateAccount/CreateAccount';
import EventTasks from './components/EventTasks/EventTasks';
import Admin from './components/Admin/Admin';
import AddAdmin from './components/AddAdmin/AddAdmin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/event-tasks" component={EventTasks} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin-add" component={AddAdmin} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
