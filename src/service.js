const petfulService = {
  getAllPets(knex) {
    return knex
      .select('*')
      .from('pets')
  },

  getById(knex, id) {
    return knex
      .from('pets')
      .select('*')
      .where('id', id)
      .first()
  },

  deletePets(knex, id) {
    return knex
      .from('pets')
      .where({ id })
      .delete()
  },

  updatePets(knex, id, newPetsFields) {
    return knex
      .from('pets')
      .where({ id })
      .update(newPetsFields)
  }
};

module.exports = petfulService;


