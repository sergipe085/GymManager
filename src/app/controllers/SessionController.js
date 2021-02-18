import jwt from 'jsonwebtoken';
import Student from './../models/Student';

import authConfig from './../../config/auth';

class SessionController {
  async store(req, res) {

  const { email, password } = req.body;

  return;

  if (email !== 'admin@gympoint.com') {
    const user = await Student.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'User not founded' });
    }

    const { name } = user;

    return res.json({
      name,
      email
    })
  }
    const admin = await Student.findOne({ where: { email } });

    console.log(admin);

    if (password && !(await admin.checkPassword(password))) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const { id, name } = admin;

    return res.json({
      user: {
        id,
        name,
        email,      
      },
      token: jwt.sign({ id }, authConfig.authSecret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}

export default new SessionController();