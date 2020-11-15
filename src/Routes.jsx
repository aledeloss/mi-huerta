import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Start from './pages/Start/Start';

const Routes = () => {

    const history = useHistory();

    return (
        <Router>
            <Switch history={history}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/start' component={Start} />
            </Switch>
        </Router>

    )
};

export default Routes;