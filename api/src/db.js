const {Sequelize, DataTypes} = require('sequelize');
const {DB_USER,DB_PASSWORD,DB_HOST} = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`,{
    logging:false,
    timestamps:false,
    native: false
});

const Persona = sequelize.define('Persona', {

    nombres:{
        type: DataTypes.STRING(50)
    },
    apellidos:{
        type: DataTypes.STRING(50)
    },
    cedula:{
        type: DataTypes.STRING(20)
    },
    telefono:{
        type: DataTypes.STRING(50)
    },
    email:{
        type: DataTypes.STRING(50)
    },
});
