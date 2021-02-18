import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.STRING,
      altura: Sequelize.STRING
    }, {
      sequelize,
    })

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    })
  }
}

export default User;