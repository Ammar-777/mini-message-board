const messages = require("./messageData");
// Get all messages
const getMessages = (req, res) => {
    res.render('index', {messages: messages , title: "Mini Messageboard"});
}

// Get message by id
const getMessageById = (req, res) => {
    const messageId = req.params.id;
}

// Add new message
const newMessage = (req, res) => {
    const message = req.body.params
}