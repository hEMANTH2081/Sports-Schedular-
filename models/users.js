'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static addUser(firstName, lastName, email, password, role){
      return this.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: role
      })
    }

    static getUser(email,password){
      return this.findOne({
        where: {
          email: email,
          password: password
        }
      })
    }

  }
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};