import uuidv4 from 'uuid/v4';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models from './models';
import routes from './routes';

import models, { connectDb } from './models';

const app = express();

// Application-level Middlware
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
    if (eraseDatabaseOnSync) {
        await Promise.all([
            models.User.deleteMany({}),
            models.Message.deleteMany({}),
        ]);

        createUsersWithMessages();
    }

    app.listen(process.env.PORT, () => 
    console.log(`App is listening on port ${process.env.PORT}!`),
    );
});

const createUsersWithMessages = async () => {
    const user1 = new models.User({
        username: 'hassan',
    });

    const user2 = new models.User({
        username: 'mohamed',
    });

    const message1 = new models.Message({
        text: 'Published the road to learn react',
        user: user1.id,
    });

    const message2 = new models.Message({
        text: 'Happy to release...',
        user: user2.id,
    });

    const message3 = new models.Message({
        text: 'Published a complete...',
        user: user2.id,
    });
    await message1.save();
    await message2.save();
    await message3.save();
    await user1.save();
};