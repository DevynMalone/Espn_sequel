'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nfl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Nfl.init({
    team: DataTypes.STRING,
    standing: DataTypes.STRING,
    record: DataTypes.STRING,
    lastScore: DataTypes.STRING,
    sbAppearances: {
      type:DataTypes.INTEGER,
    validate:{ isInt: { msg:'Number for player must be an integer'} }
  }
  }, {
    sequelize,
    modelName: 'Nfl',
  });
  return Nfl;
};