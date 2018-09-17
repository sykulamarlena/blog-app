import {createStore, applyMiddleware, compose} from 'redux';
import {persistState} from 'redux-devtools';
import {routerMiddleware} from 'react-router-redux';
import history from './history';
import reducers from '../reducers';

const router = routerMiddleware(history);

const enhancer = compose(
    applyMiddleware(router),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
);

export default function configureStore(initialState) {
    return createStore(reducers, initialState, enhancer);
}
