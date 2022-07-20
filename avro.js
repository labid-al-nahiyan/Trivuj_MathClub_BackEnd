const express = require('express');

const router = express.Router({mergeParams:true})

const labid = require('./labid')

router.use('/labid',labid);

module.exports = router;