const {animals, dogs, cats} = require('../STORE');

const AnimalsService = {
  getAllAnimals() {
    let animalsTemp = animals.first;
    let animalsArr = [];
    while (animalsTemp !== null) {
      animalsArr.push(animalsTemp.value);
      animalsTemp = animalsTemp.next;
    }
    return animalsArr;
  },
  getById(id) {
    let animalsTemp = animals.first;
    while (animalsTemp !== null && animalsTemp.value.id+'' !== id) {
      animalsTemp = animalsTemp.next;
    }
    if(!animalsTemp)
      return null;
    return animalsTemp.value
  },
  deleteAnimal(animal) {
    return animals.remove(animal.name)
  },
  resetAnimals() {
    let animalsTemp = animals.first;
    while (animalsTemp !== null) {
      animals.dequeue();
      animalsTemp = animalsTemp.next;
    }
    dogs.forEach(doggo => animals.enqueue(doggo));
    cats.forEach(catto => animals.enqueue(catto));
  }
};

module.exports = AnimalsService;


