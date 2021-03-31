import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useParams
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Start from './pages/Start/Start';
import Records from './pages/Records/Records';
import About from './pages/About/About';
import Detail from './pages/Detail/Detail';
import Page404 from './pages/Page404/Page404';

const Routes = () => {

    const history = useHistory();

    return (
        <Router>
            <Switch history={history}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/start' component={Start} />
                <Route exact path='/records' component={Records} />
                <Route exact path='/detail/:vegetable' component={Detail} />
                <Route  component={Page404} />
            </Switch>
        </Router>

    )
};

export default Routes;