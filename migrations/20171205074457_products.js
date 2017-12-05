
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('products', (table) => {
    table.increments('product_id').primary();
    table.string('product_name', 64).notNullable();
    table.string('sku', 64).notNullable();
    table.string('upc', 12).notNullable();
    table.string('ean', 14).notNullable();
    table.string('jan', 13).notNullable();
    table.string('isbn', 17);
    table.string('mpn', 64).notNullable();
    table.string('location', 128).notNullable();
    table.integer('quantity', 4).notNullable();
    table.integer('stock_status_id', 11).notNullable();
    table.string('image', 255).notNullable();
    table.integer('manufacturer_id', 11).notNullable();
    table.boolean('shipping').notNullable();
    table.decimal('price', 15, 4).notNullable().defaultTo('0.0000');
    table.integer('points', 8).notNullable().defaultTo('0');
    table.integer('tax_class_id', 11).notNullable();
    table.timestamp('date_available').defaultTo(knex.fn.now());
    table.decimal('weight', 15, 4).notNullable().defaultTo('0.00000000');
    table.integer('weight_class_id', 11).notNullable().defaultTo('0');
    table.decimal('length', 15, 8).notNullable().defaultTo('0.00000000');
    table.decimal('width', 15, 8).notNullable().defaultTo('0.00000000');
    table.decimal('height', 15, 8).notNullable().defaultTo('0.00000000');
    table.integer('length_class_id', 11).notNullable().defaultTo('0');
    table.boolean('subtract').notNullable();
    table.integer('minimum', 11).notNullable();
    table.integer('sort_order', 11).notNullable();
    table.boolean('status').notNullable().defaultTo(false);
    table.integer('viewed', 5).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('products');
};
