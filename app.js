const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    res.render('index');
});

// listen on port 3000
server = app.listen(3000);

// instantiate socket.io
const io = require('socket.io')(server);

// listen the all connections
io.on('connection', (socket) => {
    console.log('New user connected');

    // default username
    socket.username = "Anonymous";

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username;
    })

});