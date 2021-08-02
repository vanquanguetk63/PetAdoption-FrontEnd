import React from "react";
import routes from "../routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </Switch>
        </Router>
    );
};

export default Main;
