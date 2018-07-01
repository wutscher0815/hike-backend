import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as hikerlist from './hikerList';
var bodyParser = require("body-parser");
import { Hiker } from './hiker';

const app = express();
app.use(bodyParser.json());
app.use(express.static('web'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//initialize a simple http server
const webSocketServer = http.createServer(app);

//initialize the WebSocket webSocketServer instance
const wss = new WebSocket.Server({ server: webSocketServer });

wss.on('connection', (ws: WebSocket) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message: string) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(JSON.stringify(hikerlist.getAll()));
    });

    ws.on('close', function close() {
        console.log('disconnected');
    });


    console.log('ws client connected');

    //send immediatly a feedback to the incoming connection    
    ws.send(JSON.stringify(hikerlist.getAll()));
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

app.delete('/hiker/:id', (req, res) => {
    console.log('remove hiker' + req.params.id || '');
    console.log(req.body);
    const hikerId = req.params.id;

    if (hikerId && hikerlist.removehiker(hikerId)) {
        wss.clients
            .forEach(client => client.send(JSON.stringify(hikerlist.getAll())))
    }
});

app.get('/hikers', (req, res) => {
    console.log('get all Hikers')
    res.send(JSON.stringify(hikerlist.getAll()));
});

webSocketServer.listen(process.env.PORT || 3000, () => console.log('listening on ' + (<any>webSocketServer.address()).port));
