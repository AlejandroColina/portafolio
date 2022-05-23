const express = require('express');
const axios = require('axios');
const { API_KEY } = require('../db');
const router = express.Router();
router.use(express.json());

router.get('/', async (req, res, next) => {
    try {
        let consulta = await axios.get(`https://newsapi.org/v2/everything?q=colombia&language=es&apiKey=${API_KEY}`)
        let data = await consulta.data.articles
        console.log(data);
        if (data.length) return res.json(data)
        return res.send('NO HAY NOTICIAS')
    } catch (error) {
        next(error)
    }
});

module.exports = router;
