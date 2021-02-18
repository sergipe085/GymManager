import User from './../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password, idade } = req.body;

    const user = await User.create({
      name, 
      email,
      password,
      idade
    })

    return res.json(user);
  }
}

export default new UserController();