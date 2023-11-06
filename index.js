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

    console.log("request token")
    // res.send(req.header('x-forwarded-for'))
    res.send(readedData)
})
app.listen(process.env.PORT || 3000)