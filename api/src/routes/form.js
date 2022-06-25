const express = require('express');
const router = express.Router();
const { Persona, Mensaje, DescriptionV } = require('../db');
router.use(express.json());

router.post('/', async (req, res, next) => {
    try {

        const { nombres, apellidos, cedula, telefono, email, mensaje } = req.body;

        let person = await Persona.findOne({ where: { cedula: cedula } });

        if (!nombres.length || !apellidos.length || !cedula.length ||
            !telefono.length || !email.length || !mensaje.length) {
            res.status(404).send('DATOS INCOMPLETOS.');
        } else {
            if (person === null) {
                await Persona.create({ nombres, apellidos, cedula, telefono, email });
                person = await Persona.findOne({ where: { cedula: cedula } });
            }

            let id = null
            for (let i in person) {
                if (id === null && typeof person[i] === 'object') id = person[i].id
            }

            await Mensaje.create({ descripcion: mensaje, id_persona: id });
            res.send('MENSAJE INGRESADO CORRECTAMENTE.');
        }

    } catch (error) {
        next(error)
    }
});

module.exports = router;