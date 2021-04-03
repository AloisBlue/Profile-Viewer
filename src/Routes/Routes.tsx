import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Index from "./index";
import Landing from "../components/layout/landing"

const Routes = () => {
    const location = useLocation();
    
    return (
        <Switch location={location}>
            <Route path={Index.layout.landing} component={Landing} exact />
        </Switch>
    )
}

export default Routes;