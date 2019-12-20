const {cats} = require('../STORE');

const CatsService = {
  getAllCats() {
    return cats
  },

  getById(id) {
    return cats.find((cat)=> cat.id+'' === id);
  },

  deleteCat(id) {
    return  cats.filter((cat)=> cat.id+'' !== id);
  }
};

module.exports = CatsService;


