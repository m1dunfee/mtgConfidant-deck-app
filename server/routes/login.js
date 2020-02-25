require('dotenv').config();
const router = require('express').Router();
const passport = require('passport')
const pool = require('../modules/Pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/logout', (req,res)=>{
    // handle with passport
    req.logout();
    res.redirect(`${process.env.host}/#/home`)
})

router.get('/account-details', rejectUnauthenticated, (req,res)=>{
    // render login
//     pool.query(`SELECT * from accounts where account_id = $1`,[req.session])
//     .then((results)=>{
//         res.send(results)
//     }).catch((err)=>{
//         console.log('error in fetch about data' ,err)
//     })
    console.log(req.session)
    res.send(200)
})



/** --------------------------- Google --------------------------- **/

router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), ((req,res)=>{
    res.redirect(`${process.env.host}/#/home`)
})
)

module.exports = router;