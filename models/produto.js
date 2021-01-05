'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Produto.belongsTo(models.Lista, {foreignKey: 'listaId', targetKey: 'id'});
      //Produto.hasMany(models.Compra);
    }
  };
  Produto.init({
    nomeProduto: DataTypes.STRING,
    nomeMedida: DataTypes.STRING,
    listaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  });

  return Produto;
};