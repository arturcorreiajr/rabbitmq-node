const amqp = require("amqplib");
const config = require("./config")

async function consumeMessages(){
    const connection = await amqp.connect(config.rabbitMQ.url);
    const channel = await connection.createChannel();

    await channel.assertExchange("logExchange", "direct");

    const q = await channel.assertQueue("InfoQueue");

    await channel.bindQueue(q.queue, "logExchange", "Info");

    channel.consume(q.queue, (msg) => {
        const data = JSON.parse(msg.content);
        console.log(data);
        channel.ack(msg);
    })
}

consumeMessages();