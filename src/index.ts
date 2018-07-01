import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as hikerlist from './hikerList';
var bodyParser = require("body-parser");
import { Hiker } from './hiker';

const app = express();
app.use(bodyParser.json());
const wsApp = express();


//initialize a simple http server
const webSocketServer = http.createServer(wsApp);

//initialize the WebSocket webSocketServer instance
const wss = new WebSocket.Server({ server: webSocketServer });

wss.on('connection', (ws: WebSocket) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message: string) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(JSON.stringify(hikerlist.getAll()));
    });

    //send immediatly a feedback to the incoming connection    
    ws.send(JSON.stringify(hikerlist.getAll()));
});

//start our webSocketServer
webSocketServer.listen(process.env.PORT || 8999, () => {
    const addr: any = webSocketServer.address();
    console.log(`Server started on ${addr.port} :)`);
});

app.post('/hiker', (req, res) => {
    console.log('add hiker');
    console.log(req.body);

    const hiker = new Hiker(req.body);
    hikerlist.addHiker(hiker)
        .then(() => res.send(JSON.stringify(hiker)))
        .then(() => wss.clients
            .forEach(client => client.send(JSON.stringify(hikerlist.getAll()))))
        .catch(e => res.status(500).send('error\n'));

});

app.get('/hikers', (req, res) => {
    console.log('get all Hikers')
    res.send(JSON.stringify(hikerlist.getAll()));
});

app.listen(3000, () => console.log('lsitening on 3000'));