const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
console.log(knexConfig);
const router = express.Router();


//++++++++++++++++++++++++++++++++++++++++++
//   -   ALL ROUTES     -
//++++++++++++++++++++++++++++++++++++++++++
// - Get Endpoints. 
//++++++++++++++++++++++++++++++++++++++++++++

router.get('/', (req, res) => {
    console.log('get all request working');
    db('students')
        .then(allstudents=> {
            if (allstudents) {
                res.status(200).json(allstudents);
            } else {
                res.status(404).json({error: 'error', err});
            }
        })
        .catch(err => {
            res.status(500).json({error: 'Error, the students info could not be retrieved', err})
        });
});


//  /:id

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('students').where({ id }).first().then( thisstudent => {
        if (thisstudent) {
            res.status(200).json(thisstudent);
        } else {
            res.status(404).json({error: "error", err});
        }
    })
    .catch(err => { res.status(500).json({error: 'error', err})});
});




//++++++++++++++++++++++++++++++++++++++++
// - Post Endpoint.     -
//++++++++++++++++++++++++++++++++++++++++

router.post('/', (req, res) => {
    console.log('post request working');
    const content = req.body;
    db('students')
        .insert(content)
        .into('students')
        .then( ids => {
            res.status(200).json(ids);
        })
        .catch(err => {
            res.status(500).json({error: "There was an error while saving your student info", err});
        });
});








module.exports = router;