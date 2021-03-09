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
import About from './pages/About/About';

const Routes = () => {

    const history = useHistory();

    return (
        <Router>
            <Switch history={history}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/start' component={Start} />
                <Route exact path='/records' component={Records} />
                {/* <Route exact path='/detail' component={Detail} /> */}
            </Switch>
        </Router>

    )
};

export default Routes;