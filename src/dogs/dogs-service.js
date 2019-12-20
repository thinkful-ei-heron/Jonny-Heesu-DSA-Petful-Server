const {dogs} = require('../STORE');
const DogsService = {
  getAllDogs() {
    return dogs
  },

  getById(id) {
    return dogs.find((dog)=> dog.id+'' === id);
  },

  deleteDog(id) {
    return  dogs.filter((dog)=> dog.id+'' !== id);
  }
};

module.exports = DogsService;


