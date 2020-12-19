import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
// import { createBrowserHistory, History } from "history";
import { Chapter1 } from "../pages";

// const history: History = createBrowserHistory();

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Chapter1} />
                <Route exact path="/chapter1" component={Chapter1} />
                <Route exact path="/chapter2" component={Chapter1} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
};

export default Routes;