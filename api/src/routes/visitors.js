const express = require('express');
const router = express.Router();
const cors = require('cors');
const { DescriptionV, NumVisitors } = require('../db');
router.use(cors());
router.use(express.json());

router.get('/', async (req, res, next) => {
    try {
        let consulta = await DescriptionV.findAll();
        if (consulta.length) {
            let consulta = await DescriptionV.findAll();
            return res.json(consulta)
        }

        return res.status(404).send({ msg: 'No hay información.' })

    } catch (error) {
        next(error)
    }
});

router.post('/data-v', async (req, res, next) => {
    try {

        if (!req.body.description || !req.body.description.length === 0
            || !req.body.ip_visitor || !req.body.ip_visitor.length === 0
            || !req.body.city_visitor || !req.body.city_visitor.length === 0
        ) return res.status(404).send({ msg: 'error, faltan datos.' })

        await DescriptionV.create(req.body);
        return res.send({ msg: 'Creado.' })

    } catch (error) {
        next(error)
    }
});

router.get('/num-v', async (req, res, next) => {
    try {

        let numV = await NumVisitors.findByPk(1);

        if (numV == null) {
            await NumVisitors.create({ num: 1 })
            let num_v = await NumVisitors.findByPk(1)
            num_v = num_v.dataValues.num
            return res.json(num_v)
        }

        if (numV != null) {
            numV = numV.dataValues.num;
            numV += 1;
            await NumVisitors.update({ num: numV }, { where: { id: 1 } })
            let num_v = await NumVisitors.findByPk(1)
            num_v = num_v.dataValues.num
            return res.json(num_v)
        }

    } catch (error) {
        next(error)
    }
});


module.exports = router;