// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',  // tells knex that we're using the SQLite3 driver we installed via npm
    connection: {
      filename: './lambda.sqlite3'
    },
    useNullAsDefault: true, // new configuration for SQLite
  },
};

