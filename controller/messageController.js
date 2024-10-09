const messages = require("./messageData");
// Get all messages
const getMessages = (req, res) => {
    res.render('index', {messages: messages , title: "Mini Messageboard"});
}

// Get message by id
const getMessageById = (req, res, next) => {
    const messageId = parseInt(req.params.id);
    const message = messages.find((message) => message.id === messageId);

    if(message) {
        res.render("views/message", {
            message,
        });
    } else {
        next();
    }
}

// Get new message
const getNewMessage = (req, res) => {
    res.render("form", { title: "Mini Message Board"});
}

// Add new message
const newMessage = (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date(),
        id: messages.length + 1,
    });
    res.redirect("/")
}

module.exports = { getMessages, getMessageById, getNewMessage, newMessage };