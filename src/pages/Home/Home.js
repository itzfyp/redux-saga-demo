
import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import Basic from '../BasicActions/BasicAction';
import SideEffects from '../SideEffects/SideEffects';
import NonBlockingSideEffects from '../NonBlockingSideEffects/SideEffects';

class Home extends Component {
    render() {
        return (<div className="app">
            <header className="app-header">
                <h1>redux-saga</h1>
                <nav>
                    <Link to="/"> Basic</Link>
                    <Link to="/sideeffects"> Side Effect</Link>
                    <Link to="/non-blocking-sideeffects"> Non blocking Side Effect</Link>
                </nav>
            </header>

            <main className="app-content">
                <Switch>
                    <Route exact path='/' component={Basic} />
                    <Route exact path='/sideeffects' component={SideEffects} />
                    <Route exact path='/non-blocking-sideeffects' component={NonBlockingSideEffects} />
                </Switch>
            </main>
        </div>)

    }
}


export default withRouter(Home);