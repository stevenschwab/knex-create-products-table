/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').truncate()
  await knex('products').insert([
    { name: 'salmon', price: 5 },
    { name: 'cod', price: 10 },
    { name: 'tuna', price: 7 }
  ]);
};
