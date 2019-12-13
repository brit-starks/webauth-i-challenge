const db = require('../database/db-config');

module.exports = {
  find,
  findById,
  insert,
  findBy
};

function find() {
  return db('users')
  // .select('id', 'username');
}

function findById(id) {
  return db('users')
  // .select('id', 'username')
  .where({ id })
  .first();
}

async function insert(user) {
  const [id] = await db('users')
  .insert(user);

  return findById(id);
}

function findBy(filter) {
  return db('users')
    .select('id', 'username', 'password')
    .where(filter);
}