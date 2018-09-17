import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {withTheme} from '@material-ui/core/styles';
import LayoutRoutes from "../routes/LayoutRoutes";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import AppBarLayout from "../components/Layout/AppBar/AppBarLayout";
import './main.css';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileOpen: false
        };
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const {theme} = this.props;

        return (
            <div className='root'>
                <AppBarLayout drawerToggle={this.handleDrawerToggle}/>

                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{paper: 'drawerPaper'}}
                        ModalProps={{keepMounted: true}}
                    >
                        <Sidebar/>
                    </Drawer>
                </Hidden>

                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{paper: 'drawerPaper'}}
                    >
                        <Sidebar/>
                    </Drawer>
                </Hidden>

                <main className='content'>
                    <div className='toolbar'/>
                    <LayoutRoutes/>
                </main>
            </div>
        );
    }
}

Layout.propTypes = {
    theme: PropTypes.object.isRequired
};

export default withTheme()(Layout);