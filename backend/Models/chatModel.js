const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId: String,
    receiverId: String,
    text: String,
    createdAt: { type: Date, default: Date.now },
});

const Messages = mongoose.model('Messages',messageSchema );

module.exports = Messages