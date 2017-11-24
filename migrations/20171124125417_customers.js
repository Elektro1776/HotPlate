
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('customers', (table) => {
    table.increments('customer_id').primary();
    table.integer('customer_group_id').notNullable();
    table.integer('language').notNullable();
    table.string('firstname', 32).notNullable();
    table.string('lastname', 32).notNullable();
    table.string('email', 96).notNullable();
    table.string('telephone', 32);
    table.string('password', 40).notNullable();
    table.string('salt', 9).notNullable();
    table.dateTime('date_added').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
