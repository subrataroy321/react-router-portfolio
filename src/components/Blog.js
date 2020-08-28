import React from 'react';
import Posts from './Posts'

function Blog(props) {
    //console.log(props.posts)
    return (
        <div className="blog">
            <h1>You are at Blog Page</h1>
            {props.posts.map((p,idx) => {
                return (
                       <Posts key={idx} post={p}/> 
                )
            })}
        </div>
    )
}

export default Blog;