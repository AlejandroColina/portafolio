const express = require('express');
const cors = require('cors');
const {infoCards} = require('./util/jobs');
const router = express.Router();
router.use(cors());
router.use(express.json());


router.get('/', (req, res, next) => {
    try {
        res.json(infoCards);
    } catch (error) {
        next(error)
    }
});

module.exports = router;
