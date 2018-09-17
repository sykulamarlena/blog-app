import React from 'react';
import PropTypes from "prop-types";
import counterpart from "counterpart";

const PostContent = (props) => (
    <React.Fragment>
        {props.index % 2 === 0 &&
            <article className='box' style={{backgroundColor: '#fffcd7'}}>
                <p className='title'>
                    {props.post.title}
                </p>

                <p className='content'>
                    <span className='bold'>{counterpart('app.posts.item.content')} &nbsp;</span>
                    {props.post.body}
                </p>
            </article>
        }

        {props.index % 2 !== 0 &&
            <article className='box'>
                <p className='title'>
                    {props.post.title}
                </p>

                <p className='content'>
                    <span className='bold'>{counterpart('app.posts.item.content')} &nbsp;</span>
                    {props.post.body}
                </p>
            </article>
        }
    </React.Fragment>
);

PostContent.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default PostContent;