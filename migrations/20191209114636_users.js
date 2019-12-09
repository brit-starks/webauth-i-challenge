
exports.up = function(knex) {
  knex.schema.createTable('users', user => {
    user.increments();
    user.string('username', 128)
      .notNullable()
      .unique();
    user.string('password',128)
      .notNullable();
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('users');
};
