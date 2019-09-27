import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
    res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
    res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
    res.send('Received a DELETE HTTP method');
});

app.listen(process.env.PORT, () => 
    console.log(`App is listening on ${process.env.PORT}!`),
);