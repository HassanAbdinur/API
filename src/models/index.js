import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Message };