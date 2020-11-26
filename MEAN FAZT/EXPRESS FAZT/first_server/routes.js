const express = require('express');
const router = express.Router();

//routes
router.get('/',(req,res)=>{
    res.render('index.ejs');
});
router.get('/login',(req,res)=>{
    res.render('login.ejs');
});


module.exports =  router;