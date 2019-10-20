import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import RecipesPage from '../../pages/RecipesPage';

export default () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/"><Redirect to="/recipes" /></Route>
            <Route path="/recipes" component={RecipesPage} />
        </Switch>
    </BrowserRouter>
    )
};