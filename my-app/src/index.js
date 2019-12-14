import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';
import Jokes from './components/Jokes';
import Header from './components/Header';

// const history = createBrowserHistory()
ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header Component={App} />} />
            <Route path='/jokes' render={() => <Header Component={Jokes} />} />

        </Switch>
    </Router>


    , document.getElementById('root'));
serviceWorker.unregister();
