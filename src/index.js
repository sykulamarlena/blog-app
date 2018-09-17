import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import App from './components/App/App';
import store from './store/getStore';
import history from './store/history';
import theme from './styles/theme'
import './styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);