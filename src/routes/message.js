import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const messages = await req.res.context.models.Messages.find();
    return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
    const message = await req.res.context.models.Message.findById(
        req.params.messageId,
    );
    return res.send(Message);
});

export default router;