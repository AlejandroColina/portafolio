const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Admin = sequelize.define('Admin', {
        email: { type: DataTypes.STRING() },
        password: { type: DataTypes.STRING() },
    })
}