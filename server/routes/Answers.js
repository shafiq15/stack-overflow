import Express  from "express"

import { postAnswer, deleteAnswer } from '../controllers/Answers.js'
import auth from '../middleware/auth.js';

const router = Express.Router();

router.patch('/post/:id', auth, postAnswer)
router.patch('/delete/:id', auth, deleteAnswer)

export default router