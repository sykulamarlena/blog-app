import React from 'react';
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const PostSearch = (props) => (
    <section>
        <TextField
            id="search"
            label="Search"
            type="search"
            style={{margin: '0 10px'}}
            value={props.search}
            onChange={props.filterList}
            fullWidth={true}
        />
    </section>
);

PostSearch.propTypes = {
    search: PropTypes.string.isRequired,
    filterList: PropTypes.func.isRequired
};

export default PostSearch;