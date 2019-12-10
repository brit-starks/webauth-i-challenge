const db = require('../database/db-config');

module.exports = {
  // add,
  // find,
  findBy,
  findById
};

function find() {
  return db('users').select('id', 'username');
}