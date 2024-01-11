const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");

const Client = sequelize.define("clients", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    },

    first_name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { freezeTableName: true, timestamps: true });

module.exports = {Client}