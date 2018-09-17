import React from 'react';
import DashboardIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/ViewColumn';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import LinkMenuItem from "./LinkMenuItem";

const Sidebar = () => (
    <React.Fragment>
        <div className='toolbar'/>

        <Paper className='paper'>
            <MenuList>
                <LinkMenuItem
                    link='/dashboard/home'
                    icon={<DashboardIcon/>}
                    title='Dashboard'
                />

                <LinkMenuItem
                    link='/dashboard/posts/0'
                    icon={<GroupIcon/>}
                    title='Posts'
                />
            </MenuList>
        </Paper>
    </React.Fragment>
);

export default Sidebar;
