import Student from './../models/Student';

class StudentController {
  async store(req, res) {
    const { name, email, idade, peso, altura } = req.body;

    if ((await Student.findOne({ where: { email } }))) {
      return res.status(400).json({ error: 'Esse studante ja existe! Utilize outro endereco de email!' });
    }

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