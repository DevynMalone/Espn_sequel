'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nba extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Nba.init({
    team: DataTypes.STRING,
    standing:{
      type:DataTypes.STRING,
      allowNull: false  // validation process
    },
    record: DataTypes.STRING,
    lastScore: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nba',
  });
  return Nba;
};