import React, { createContext, useState } from 'react';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/create-account/:key" component={CreateAccount} />
          <Route path="/event-tasks" component={EventTasks} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin-add" component={AddAdmin} />
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
