const {DataTypes} = require("sequelize")
const {roles} = require("../../config")
const UserModel = {
    self:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName
}