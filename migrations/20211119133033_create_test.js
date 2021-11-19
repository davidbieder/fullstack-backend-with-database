
exports.up = function(knex) {
  return knex.schema.createTable('test', (table) => {
    table.integer('value')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('test')
};
