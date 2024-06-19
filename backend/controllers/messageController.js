const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    const { receiverId, message } = req.body;
    const senderId = req.user.id;

    try {
        const newMessage = new Message({ senderId, receiverId, message });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Unable to send message' });
    }
};

exports.getMessages = async (req, res) => {
    const { userId } = req.params;

    try {
        const messages = await Message.find({ 
            $or: [{ senderId: req.user.id, receiverId: userId }, { senderId: userId, receiverId: req.user.id }] 
        }).populate('senderId receiverId', 'username profilePic').sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Unable to fetch messages' });
    }
};
