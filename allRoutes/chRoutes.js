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
// - Post Endpoint.     -
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


//++++++++++++++++++++++++++++++++++++++++
// - Delete Endpoint.   -
//++++++++++++++++++++++++++++++++++++++++
// Calling .del() without first filtering the records will result on the removal of all the records in the table, be careful!

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('cohorts')
        .where({ id })
        .del()
        .then(count => {
            if (count == 0) {
                res.status(404).json({ error: 'Error, nothing was deleted. Please try again.', err});
            } else {
                res.status(200).json(count);
            }
        })
        .catch(err => {
            res.status(500).json({error: 'There was an error deleting the cohort. Please Try again.', err }) 
        });
});




module.exports = router;