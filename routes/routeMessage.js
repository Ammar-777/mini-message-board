const express = require("express");
const messageController = require("../controller/messageController");


const router = express.Router();


// messagesRouter.get("/", (req, res) => {
//     res.render('index', {messages: messages , title: "Mini Messageboard"});
// })


router.get('/', messageController.getMessages );
router.get('/new', messageController.getNewMessage);
router.post('/new', messageController.newMessage);


module.exports = router;