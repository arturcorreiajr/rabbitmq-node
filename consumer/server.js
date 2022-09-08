const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Consumer = require("./consumer");
const consumer = new Consumer();

app.use(bodyParser.json("application/json"));

app.get("/", function (req, res, next) {
    consumer.consumeMessages();
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({message: 'Consumer is running...'}))
});

app.listen(3000, () => {
    console.log("Consumer Started...");
})


