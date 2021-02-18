import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleWare from './app/middlewares/auth';

const routes = Router();

routes.post('/users', authMiddleWare, UserController.store);

routes.get('/session', SessionController.store);

// routes.get('', (req, res) {
//   req.headers.authorization
// })

export default routes;