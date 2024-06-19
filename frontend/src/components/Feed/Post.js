import React from 'react';

const Post = ({ post }) => {
    return (
        <div>
            <h3>{post.userId.username}</h3>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="post" />}
        </div>
    );
};

export default Post;
