const express = require('express');
 
const router = express.Router({mergeParams:true})


const member = require('./member');
const problemSet = require('./ProblemSet');
const campaign = require('./Campaign');
const post = require('./Post');
const submit = require('./Submit');

router.use('/member',member);
router.use('/problemset',problemSet);
router.use('/campaign',campaign);
router.use('/post',post);
router.use('/submit',submit)

module.exports = router





