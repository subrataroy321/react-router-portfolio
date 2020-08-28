import React from 'react';

function Posts(props) {
    return(
        <div>
            <div className="post">
                <h3>{props.post.title}</h3>
                <p>{props.post.body}</p>
            </div>
        </div>
    )
}

export default Posts;