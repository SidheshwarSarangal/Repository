import axios from 'axios';

export const createPost = async (postData) => {
    const response = await axios.post('/api/posts/create', postData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};

export const getPosts = async () => {
    const response = await axios.get('/api/posts/all', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};
