const { sequelize, Admin } = require('./src/db');
const server = require('./src/app');

sequelize.sync({ force: true })
    .then(async () => {

        if (!await Admin.findByPk(1)) {
            Admin.create({
                email: 'alejo_9102@hotmail.com',
                password: 'henry1234'
            })
        }
    })

    .then(() => {
        console.log('connected to bd')
    })
    .then(() => {
        server.listen(3001, () => {
            console.log('connected to server')
        })
    })