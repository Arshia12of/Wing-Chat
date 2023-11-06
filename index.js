const express = require('express')
const fs = require("fs");
const app = express();

const path = "./chats.json";
var readedData;

fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    readedData = JSON.parse(data);
});




app.all('/', (req, res) => {

    console.log(readedData.name)
    res.send(req.socket.remoteAddress)
})
app.listen(process.env.PORT || 3000)