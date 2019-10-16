import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const messages = await req.res.context.models.Messages.find();
});

export default router;