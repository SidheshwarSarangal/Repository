import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import Chat from './components/Chat/Chat';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Feed} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </Router>
    );
}

export default App;
