const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const pool = require('../modules/Pool');

passport.serializeUser((account_id,done)=>{
    done(null,account_id)
})

passport.deserializeUser((account_id,done)=>{
    pool.query(`SELECT * from accounts where google_id = $1`,[account_id])
    .then((result)=>{
        done(null,result)
    })
    .catch((err)=>{
        console.log('account not found')
    })
})

passport.use(new GoogleStrategy({
    //option for strategy
    callbackURL: '/login/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done)=>{

    //check if user is in the db
    pool.query(`SELECT * from accounts where google_id = $1;`,[profile.id])
    .then((result)=>{
    
        //if no account is found create account

        // console.log(result)
        if(result.rowCount === 0){
            pool.query(`INSERT INTO accounts(account_name,google_id)
                VALUES($1, $2);`,[profile.displayName, profile.id])

            pool.query(`SELECT account_id from accounts where google_id = $1;`,[profile.id])
                .then((account_id)=>{
                    done(null,account_id)
                })
                .catch((error)=>{
                    console.log('account not found',error)
                }) 
        }
        else{
            done(null,profile.id)
        }

    }).catch((error)=>{
        console.log('error in check google accounts',error)
    })
})
)