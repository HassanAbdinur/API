import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

let users = {
    1: {
        id: '1',
        username: 'Hassan',
    },
    2: {
        id: '2',
        username: 'Ahmed',
    },
};

let messages= {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Goodbye World',
        userId: '2'
    },
};



app.listen(process.env.PORT, () => 
    console.log(`App is listening on ${process.env.PORT}!`),
);