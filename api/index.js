const { sequelize } = require('./src/db');
const server = require('./src/app');

sequelize.sync({ force: true })

    .then(() => {
        console.log('connected to bd')
    })
    .then(() => {
        server.listen(3001, ()=>{
            console.log('connected to server')
        })
    })