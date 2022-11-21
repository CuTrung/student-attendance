'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student_ClassGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_ClassGroup.init({
    studentId: DataTypes.STRING,
    classGroupId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Student_ClassGroup',
    freezeTableName: true
  });
  return Student_ClassGroup;
};