const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
console.log(knexConfig);
const router = express.Router();



//++++++++++++++++++++++++++++++++++++++++++
// get endpoints
//++++++++++++++++++++++++++++++++++++++++++++
router.get('/', (req, res) => {
    console.log('get all request working');
    db('cohorts')
        .then(allcohorts => {
            if (allcohorts) {
                res.status(200).json(allcohorts);
            } else {
                res.status(404).json({error: 'error', err});
            }
        })
        .catch(err => {
            res.status(500).json({error: 'error the cohorts info could not be retrieved', err})
        });
});


//++++++++++++++++++++++++++++++++++++++++
// - post stuff here
//++++++++++++++++++++++++++++++++++++++++
router.post('/', (req, res) => {
    console.log('post request working');
    const content = req.body;
    db('cohorts')
        .insert(content)
        .into('cohorts')
        .then( ids => {
            res.status(200).json(ids);
        })
        .catch(err => {
            res.status(500).json({error: "There was an error while saving your cohort info", err});
        });
});



module.exports = router;