import Student from './../models/Student';

class StudentController {
  async store(req, res) {
    const { name, email, idade, peso, altura } = req.body;

    const student = await Student.create({
      name, 
      email,
      idade,
      peso,
      altura
    });

    return res.json(student);
  }
}

export default new StudentController();