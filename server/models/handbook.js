'use strict';
module.exports = (sequelize, DataTypes) => {
  const Handbook = sequelize.define('Handbook', {
    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Handbook.associate = function(models) {
    // associations can be defined here
  };
  return Handbook;
};