import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [receiverId, setReceiverId] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await axios.get(`/api/messages/${receiverId}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages', error);
            }
        };

        if (receiverId) fetchMessages();
    }, [receiverId]);

    const handleSendMessage = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/api/messages/send', { receiverId, message }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setMessages([...messages, data]);
            setMessage('');
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    return (
        <div>
            <h2>Chat</h2>
            <div>
                {messages.map((msg) => (
                    <p key={msg._id}>{msg.message}</p>
                ))}
            </div>
            <form onSubmit={handleSendMessage}>
                <input 
                    type="text" 
                    placeholder="Receiver ID" 
                    value={receiverId} 
                    onChange={(e) => setReceiverId(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
