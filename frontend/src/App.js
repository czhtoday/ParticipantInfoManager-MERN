import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddParticipantPage from './pages/AddParticipantPage';
import ManageParticipantsPage from './pages/ManageParticipantsPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/add-participant" component={AddParticipantPage} />
          <Route path="/manage-participants" component={ManageParticipantsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
