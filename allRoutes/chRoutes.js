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

//  /:id

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('cohorts').where({ id }).first().then( thiscohort => {
        if (thiscohort) {
            res.status(200).json(thiscohort);
        } else {
            res.status(404).json({error: "error", err});
        }
    })
    .catch(err => { res.status(500).json({error: 'error', err})});
});




// //  /:id/students
// //  Get Single Projects Actions
// router.get("//:id/students", (req, res) => {
//     const { id } = req.params;
//     db('cohorts').where("project_id", id )
//     //       .then(students => students.map(action => mappers.actionToBody(action)));
//     //   },
//       .getProjectActions(id)
//       .then(project => {
//         if (project.length) {
//           res.status(200).json(project);
//         } else {
//           res.status(404).json({
//             message:
//               "a project with that id doesnt exist or does not have any actions with it"
//           });
//         }
//       })
//       .catch(err =>
//         res.status(500).json({ error: "the project info could not be retrieved" })
//       );
//   });





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

//++++++++++++++++++++++++++++++++++++++++
// - Update  Endpoint.   -
//++++++++++++++++++++++++++++++++++++++++

router.put('/:id', (req, res) => {
    const changes= req.body;
    const { id } = req.params;
    db('cohorts')
        .where('id', '=', id)
        .update(changes)
        .then(count => {
            // count === number of records updated
            if (count == 0) {
                res.status(404).json({error: 'No items updated, cohort not found', err});
            }
            res.status(200).json(count);
        }).catch( err => {
            res.status(500).json({error: 'error', err});
        });
});





module.exports = router;