import React from 'react';
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const LinkMenuItem = (props) => (
    <Link to={props.link}>
        <MenuItem>
            <ListItemIcon>
                {props.icon}
            </ListItemIcon>

            <ListItemText inset primary={props.title}/>
        </MenuItem>
    </Link>
);

export default LinkMenuItem;