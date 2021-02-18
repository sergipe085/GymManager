import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/users', UserController.store);

routes.get('/session', SessionController.store);

// routes.get('', (req, res) {
//   req.headers.authorization
// })

export default routes;