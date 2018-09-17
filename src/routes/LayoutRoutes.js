import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import constants from '../constants/linksConstants';
import Home from "../components/Pages/Home/Home";
import PostsList from "../containers/PostsList";

const LayoutRoutes = () => (
    <Switch>
        <Route exact path={constants.LINK_DASHBOARD_HOME} component={Home}/>
        <Route exact path={constants.LINK_DASHBOARD_POSTS_NUMBER} component={PostsList}/>
        <Route path={constants.LINK_DASHBOARD_POSTS}>
            <Redirect to="/dashboard/posts/0"/>
        </Route>
        <Route path={constants.LINK_DASHBOARD_NOT_EXIST}>
            <Redirect to="/404"/>
        </Route>
    </Switch>
);

export default LayoutRoutes;
