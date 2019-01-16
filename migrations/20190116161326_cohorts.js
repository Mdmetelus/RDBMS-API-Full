
exports.up = function(knex, Promise) {
    //makes changes to our database
    return knex.schema.createTable('cohorts', function(tbl){
        //primary key (will always be id) empty = id; 'items_id' = specifically named
        tbl.increments();

        tbl.string('name', 128);

        //timestamp
        tbl.timestamp(true,true);

    }
  
};

exports.down = function(knex, Promise) {
    // rollback/undo the changes/ undo the created database from above

    knex.schema.dropTableIfExists('cohorts');
};
