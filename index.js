const express = require('express')
const fs = require("fs");
const app = express()

const path = "./chats.json";

fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(JSON.parse(data));
  });




app.all('/', (req, res) => {

    console.log("got a request!")
    res.send('Yo')
})
app.listen(process.env.PORT || 3000)