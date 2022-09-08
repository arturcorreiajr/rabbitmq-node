const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Producer = require("./producer");
const producer = new Producer();

app.use(bodyParser.json("application/json"));

app.get("/", function (req, res, next) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({message: 'Producer is running...'}))
});

app.post("/producer", async(req, res, next) => {
    await producer.publishMessage(req.body.logType, req.body.message);
    res.send();
});

app.listen(3000, () => {
    console.log("Producer Started...");
})


