import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

import authMiddleWare from './app/middlewares/auth';

const routes = Router();

routes.post('/users', authMiddleWare, StudentController.store);

routes.get('/session', SessionController.store);

// routes.get('', (req, res) {
//   req.headers.authorization
// })

export default routes;