
exports.up = function(knex, Promise) {
    //makes changes to our database
    return knex.schema.createTable('students', function(tbl) {
        //primary key (will always be id) empty = id; 'items_id' = specifically named

        tbl.increments(); // defaultss to  a column named id//

        tbl.string('name', 255);

        //timestamp:
        tbl.timestamp(true,true);

        // foreign  key implimentation:
        tbl.integer('cohort_id').unsigned().references('id').inTable('cohorts');

        ///constraints
        // tbl.unique('name','uq_items_name'); // makes name unique

    });
  
};

exports.down = function(knex, Promise) {
    // rollback/undo the changes/ undo the created database from above
    // return knew.schema.dropUnique('name' , 'uq_items_name' );

    knex.schema.dropTableIfExists('students');
  
};
