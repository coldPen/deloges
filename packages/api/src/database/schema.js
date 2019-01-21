const { client } = require('./client');

const trxFunction = cb => trx => (trx ? cb(trx) : client.transaction(cb));

const create = trxFunction(async trx => {
  await trx.schema.createTable('user', table => {
    table.increments('id').primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.boolean('isAdmin').default(false);
    table.boolean('isDislodged').default(false);
    table.boolean('isVolunteer').default(false);
    table.string('userName');
    table.string('firstName');
    table.string('lastName');
    table.string('genre');
    table.string('phone');
    table.string('address');
  });

  await trx.schema.createTable('category', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });

  await trx.schema.createTable('offer', table => {
    table.increments('id').primary();
    table
      .integer('userId')
      .unsigned()
      .notNullable();
    table
      .integer('categoryId')
      .unsigned()
      .notNullable();
    table
      .boolean('isAvailable')
      .default(true)
      .notNullable();
    table.string('title').notNullable();
    table.text('description');

    table
      .foreign('userId')
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .foreign('categoryId')
      .references('id')
      .inTable('category')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
});

const destroy = trxFunction(async trx => {
  await trx.schema.dropTableIfExists('offer');
  await trx.schema.dropTableIfExists('category');
  await trx.schema.dropTableIfExists('user');
});

const clear = trxFunction(async trx => {
  await destroy(trx);
  await create(trx);
});

module.exports = { clear, create, destroy };
