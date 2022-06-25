const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const NumVisitors = sequelize.define('NumVisitors', {
        num: {
            type: DataTypes.INTEGER(),
            defaultValue: 0
        }
    })
}