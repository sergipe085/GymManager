import jwt from 'jsonwebtoken';
import Student from './../models/Student';
import User from './../models/User';

import authConfig from './../../config/auth';

class SessionController {
  async store(req, res) {

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(400).json({ error: 'Usuário nao encontrado!' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta!' })
    }

    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email,
      },
      token: jwt.sign({ id: user.id }, authConfig.authSecret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}

export default new SessionController();