// import WebSocket, { WebSocketServer } from 'ws';
const WebSocket = require('ws')
const { nanoid } = require("nanoid");
const fs = require('fs');
const clients = {};
const log = fs.existsSync("log") && fs.readFileSync("log");
const messages = JSON.parse(log) || [];
const wss = new WebSocket.Server({port: 8080});

wss.on("connection", (ws) => {
    const id = nanoid();
    clients[id] = ws;
    console.log(`New client ${id}`);
    ws.send(JSON.stringify(messages))

    ws.on("message", (rawMessage) => {
        const { name, message } = JSON.parse(rawMessage)
        messages.push({ name, message })
        for(const id in clients) {
            clients[id].send(JSON.stringify([{ name, message }]))
        }
    })

    ws.on("close", () => {
        delete clients[id];
        console.log(`Client is closed ${id}`);
    })
});

process.on('SIGINT', () => {
    wss.close();
    fs.writeFile('log', JSON.stringify(messages), err => {
        if(err) {
            console.log(err);
        }
        process.exit();
    })
})