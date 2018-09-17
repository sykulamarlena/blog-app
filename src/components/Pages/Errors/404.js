import React from 'react';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import './404.css';
import counterpart from "counterpart";

const Page404 = () => (
    <div className='notFoundWrapper'>
        <div>
            <div className='notFoundTitle'>
                {counterpart('app.error.notFound.title')}
            </div>
            <div className='notFoundDescription'>
                {counterpart('app.error.notFound.description')}
            </div>
        </div>
        <div>
            <Link to="/">
                <Button variant="contained" color="primary" className='notFoundButton'>
                    {counterpart('app.error.backButton')}
                </Button>
            </Link>
        </div>
    </div>
);

export default Page404;
