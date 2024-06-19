import axios from 'axios';

export const sendMessage = async (messageData) => {
    const response = await axios.post('/api/messages/send', messageData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};

export const getMessages = async (userId) => {
    const response = await axios.get(`/api/messages/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};
