
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'rowValue1'},
        {name: 'rowValue2'},
        {name: 'rowValue3'},
        {name: 'rowValue4'},
        {name: 'rowValue5'},
        {name: 'rowValue6'},
        {name: 'rowValue7'},
        {name: 'rowValue8'},
        {name: 'rowValue9'},
        {name: 'rowValue10'},
        {name: 'rowValue11'},
        {name: 'rowValue12'}
      ]);
    });
};
