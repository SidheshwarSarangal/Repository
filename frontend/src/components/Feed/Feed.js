import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get('/api/posts/all', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Feed</h2>
            {posts.map(post => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
};

export default Feed;
