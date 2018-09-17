import React, {Component} from 'react';
import counterpart from 'counterpart';
import _EN from '../../translations/en-US.json';
import MainRoutes from "../../routes/MainRoutes";

counterpart.registerTranslations('en', _EN);
counterpart.setLocale('en');

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <MainRoutes/>
            </React.Fragment>
        );
    }
}

export default App;
