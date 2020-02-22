const express = require('express');
const router = express.Router();
const pool = require('../modules/Pool');

router.post('/create-account', (req, res) => {
    // check if account already exists
    pool.query(`
    INSERT INTO accounts(account_name, account_password, account_admin)
    VALUES($1, $2, $3)`,[req.body.account_name,req.body.account_password,req.body.account_admin])
    .then((result)=>{
        console.log(result)
        res.send(200)
    }).catch((error)=>{
        console.log('error in mtg api',error)
        res.sendStatus(500)
    })
});



module.exports = router;