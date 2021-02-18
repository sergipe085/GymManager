import sequelize from 'sequelize';
import { Sequelize } from 'sequelize';

import databaseConfig from './../config/database';

const models = [];

class Database {
  constructor()
  {
    this.init();
  }

  init()
  {
    this.sequelize = new Sequelize(databaseConfig);
  }
}

export default new Database();