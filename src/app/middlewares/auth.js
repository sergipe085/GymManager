import jwt from 'jsonwebtoken';
import authConfig from './../../config/auth';

export default (req, res, next) => {
  const header = req.headers.authorization;

  const [, token] = header.split(' ');

  try {

    jwt.verify(token, authConfig.authSecret);

    return next();

  } catch (err) {
    return res.status(401).json({ error: "Token is invalid" });
  }
}