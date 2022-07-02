import express from 'express';
import userModel from './models';

const router = express.Router();

router.post('/adduser', async (req: any, res: any) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.get('/users', async (req: any, res: any) => {
    const users = await userModel.find({});
    try {
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});
export default router;