import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import constants from '../constants/linksConstants';
import Layout from "../containers/Layout";
import Page404 from "../components/Pages/Errors/404";

const MainRoutes = () => (
    <HashRouter>
        <Switch>
            <Route exact path={constants.LINK_HOMEPAGE}>
                <Redirect to={constants.LINK_DASHBOARD_HOME}/>
            </Route>
            <Route path={constants.LINK_DASHBOARD} component={Layout}/>
            <Route path={constants.LINK_NOT_EXIST} component={Page404}/>
        </Switch>
    </HashRouter>
);

export default MainRoutes;
