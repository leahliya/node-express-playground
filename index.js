const express = require('express');
const bodyParser = require('body-parser');

const port = 4001;

const app = express();

app.use(bodyParser.json());

const fruits = [
    {
        name: 'Banana',
        color: 'Yellow'
    }, {
        name: 'Apple',
        color: 'Green'
    }, {
        name: 'Peach',
        color: 'Pink'
    }
];


app.get('/api/fruits', function (req, res, next) {
    res.status(200).json({fruits});
  });

// app.post('/messages', function (req, res, next) {
//     messages.push({ message: req.body.message, time: new Date() });
//     res.status(200).json({ messages: messages });
//     console.log(req.body);
//   });  


app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});







