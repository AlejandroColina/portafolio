const express = require('express');
const router = express.Router();
const cors = require('cors');
const { Admin } = require('../db');
// const nodemailer = require('nodemailer');
const transporter = require('../routes/nodemailer/transporter');
router.use(cors());
router.use(express.json());

router.get('/', async (req, res, next) => {
    const { email, password } = req.query;

    let valEmail = await Admin.findOne({ where: { email: email } })

    if (valEmail) {
        let valPass = await Admin.findOne({ where: { password: password } })
        valPass
            ? res.send(true)
            : res.status(404).send({ msg: 'Contraseña inválida.' })
    } else {
        res.status(404).send({ msg: 'Correo inválido.' })
    }
});

router.patch('/', async (req, res, next) => {
    try {
        const { email } = req.query;

        let valEmail = await Admin.findOne({ where: { email: email } })

        if (valEmail) {
            let message = {
                from: 'Portafolio Alejandro Colina <finder.app.henry@hotmail.com>',
                to: email,
                subject: 'Solicitud de restablecimiento de contraseña.',
                html: `<h1>Change your password.</h1>`
            };

            transporter.sendMail(message, (err, info) => {
                if (err) return res.status(404).send({ msg: 'Problemas al enviar email de restauración.' });
                return res.send({ msg: 'Verifica el correo electrónico.' });
            });
        } else {
            res.send({ msg: 'Correo inválido.' })
        }
    } catch (error) {
        next(error)
    }
});

module.exports = router;