const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const DescriptionV = sequelize.define('DescriptionV', {
        description: { type: DataTypes.STRING() },
        city_visitor: { type: DataTypes.STRING() },
        ip_visitor: { type: DataTypes.STRING() },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    })
}