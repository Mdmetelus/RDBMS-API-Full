
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: '1rowValue1', cohort_id: 1,},
        {name: '2rowValtyrue2',cohort_id: 1,},
        {name: '3rowVq34alue3', cohort_id: 1,},
        {name: '4rowVa5eylue4', cohort_id: 7,},
        {name: '5rowVaukrlue5', cohort_id: 2,},
        {name: '6rowVtyalue6', cohort_id: 8,},
        {name: '7rgghowValue7', cohort_id: 2,},
        {name: '8rowValugsfghe8', cohort_id: 2,},
        {name: '9rowggsfValue9', cohort_id: 3,},
        {name: '10rogswValue10', cohort_id: 9,},
        {name: '11rowVagsglue11', cohort_id: 3,},
        {name: '12rowVgsgalue12', cohort_id: 4,},
        {name: '13rowVhgsgalue6', cohort_id: 5,},
        {name: '14rowValue7', cohort_id: 10,},
        {name: '15rowValsghgue8', cohort_id: 4,},
        {name: '16rowValuhsgdhse9', cohort_id: 11,},
        {name: '17rowhsh', cohort_id: 4,},
        {name: '18rowVsgghalue11', cohort_id: 12,},
        {name: '19roweyValujke12', cohort_id: 5,}
      ]);
    });
};
