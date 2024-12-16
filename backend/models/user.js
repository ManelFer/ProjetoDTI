const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'user',
    tableName: 'user',
    timestamps: false,
});
module.exports = User;