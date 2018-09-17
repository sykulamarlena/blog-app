import React from 'react';
import PropTypes from "prop-types";
import counterpart from "counterpart";

const PostContent = (props) => (
    <article className='box'>
        <p className='title'>
            {props.post.title}
        </p>

        <p className='content'>
            <span className='bold'>{counterpart('app.posts.item.content')} &nbsp;</span>
            {props.post.body}
        </p>
    </article>
);

PostContent.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostContent;