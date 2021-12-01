'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mlb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mlb.init({
    team: DataTypes.STRING,
    record: DataTypes.STRING,
    pct: DataTypes.STRING,
    league: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mlb',
  });
  return Mlb;
};