const express = require('express');

const router = express.Router({mergeParams:true})

const avro = require('./avro')

router.use('/avro',avro);

module.exports = router;