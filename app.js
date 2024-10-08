const express = require("express");
const path = require("path");
const messagesRouter = require("./routes/routeMessage");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}))

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", messagesRouter);


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The server is connected on port ${port}`);
});
