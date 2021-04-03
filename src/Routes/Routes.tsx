import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Index from "./index";
import Landing from "../components/layout/landing"
import AllProfiles from "../components/profiles/allProfiles";

const Routes = () => {
    const location = useLocation();
    
    return (
        <Switch location={location} key={location.key}>
            <Route path={Index.layout.landing} component={Landing} exact />
            <Route path={Index.profile.allprofiles} component={AllProfiles} exact />
        </Switch>
    )
}

export default Routes;