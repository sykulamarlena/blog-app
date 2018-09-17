import React from 'react';
import PropTypes from 'prop-types';
import counterpart from "counterpart";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const AppBarLayout = (props) => (
    <AppBar className='appBar'>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={props.drawerToggle}
                className='navIconHide'
            >
                <MenuIcon/>
            </IconButton>

            <Typography variant="title" color="inherit" noWrap>
                {counterpart('app.title')}
            </Typography>
        </Toolbar>
    </AppBar>
);

AppBarLayout.propTypes = {
    drawerToggle: PropTypes.func.isRequired
};

export default AppBarLayout;