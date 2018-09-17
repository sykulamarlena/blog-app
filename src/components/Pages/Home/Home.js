import React from 'react';
import counterpart from "counterpart";
import {Grid} from 'react-flexbox-grid';

const Home = () => (
    <Grid className='wrapper'>
        {counterpart('app.description')}
    </Grid>
);

export default Home;
