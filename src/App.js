import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import UserForm from './components/Users/UserForm';

function App() {
  return (
    <Switch>
      <Route path="/users/new">
        <UserForm />
      </Route>
      <Route path="/users/:userId">

      </Route>
      <Route path="/">
        <Users />
      </Route>
    </Switch>
  );
}

export default App;
