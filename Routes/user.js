const express = require('express');
 
const router = express.Router({mergeParams:true})

const handle = require('../sql');

const member = require('./member');

router.use('/member',member);

module.exports = router





