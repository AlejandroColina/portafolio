const { sequelize } = require('./src/db');

sequelize.sync({ force: true })

    .then(() => {
        console.log('connected to bd')
    })