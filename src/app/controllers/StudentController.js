import Student from './../models/Student';

class StudentController {
  async store(req, res) {
    const { name, email, idade } = req.body;

    const user = await Student.create({
      name, 
      email,
      idade
    })

    return res.json(user);
  }
}

export default new StudentController();