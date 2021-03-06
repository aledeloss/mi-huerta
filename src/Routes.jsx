import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Start from './pages/Start/Start';
import Records from './pages/Records/Records';

const Routes = () => {

    const history = useHistory();

    return (
        <Router>
            <Switch history={history}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/start' component={Start} />
                <Route exact path='/records' component={Records} />
                <Route exact path='/prueba' component={Start} />
            </Switch>
        </Router>

    )
};

export default Routes;