// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/users.db3'
    },
      migration: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      }
    }
  };

