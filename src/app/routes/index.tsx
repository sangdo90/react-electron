import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
// import { createBrowserHistory, History } from "history";
import { CreatedWebpack, CRA, Chapter2, Chapter3 } from "../pages";

// const history: History = createBrowserHistory();

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={CreatedWebpack} />
                <Route exact path="/CRA" component={CRA} />
                <Route exact path="/webpack" component={CreatedWebpack} />
                <Route exact path="/chapter2" component={Chapter2} />
                <Route exact path="/chapter3" component={Chapter3} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
};

export default Routes;