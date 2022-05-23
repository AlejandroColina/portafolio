require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, API_KEY } = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/disenio`, {
    logging: false,
    native: false,
    define: {
        timestamps: false
    }
});

const Persona = sequelize.define('Persona', {

    nombres: {
        type: DataTypes.STRING(50)
    },
    apellidos: {
        type: DataTypes.STRING(50)
    },
    cedula: {
        type: DataTypes.STRING(20)
    },
    telefono: {
        type: DataTypes.STRING(50)
    },
    email: {
        type: DataTypes.STRING(50)
    },
});

const Mensaje = sequelize.define('Mensaje', {
    descripcion: {
        type: DataTypes.TEXT
    }
});

Persona.hasMany(Mensaje, { foreignKey: 'id_persona' });
Mensaje.belongsTo(Persona, { foreignKey: 'id_persona' });

module.exports = {
    sequelize, Persona, Mensaje, API_KEY
}