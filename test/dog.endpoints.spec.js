const knex = require('knex');
const app = require('../src/app');
const { makePetfulArray } = require('./fixture');

describe('Dog Endpoints', function() {
  after('disconnect from db', () => db.destroy());
  before('clean the table', () => db.raw('TRUNCATE DOG RESTART IDENTITY CASCADE'));
  afterEach('cleanup',() => db.raw('TRUNCATE DOG RESTART IDENTITY CASCADE'));

  describe(`GET /api/dog`, () => {
    context(`Given no dog`, () => {
      it(`Responds with 200 and empty list`, () => {
        return supertest(app)
          .get('/api/dog')
          .expect(200, [])
      })
    });

    context(`Given dog in database`, () => {
      const testdog = makePetfulArray();

      beforeEach(`Insert dog`, () => {
        return db
          .into('dog')
          .insert(testdog)
      })

      it('Responds with 200 and get all store', () => {
        return supertest(app)
          .get('/api/dog')
          .expect(200, testdog)
      })
    });
  });


  describe(`GET /api/dog/:id`, () => {
    context(`Given no dog`, () => {
      it(`Responds with 404`, () => {
        const dogId = 123456;

        return supertest(app)
          .get(`/api/dog/${dogId}`)
          .expect(404, {
            error: {
              message: `Dog doesn't exist`
            }
          })
      })
    });

    context(`Given dog in database`, () => {
      const testdog = makePetfulArray();

      beforeEach(`Insert dog`, () => {
        return db
          .into('dog')
          .insert(testdog)
      })

      it('Responds with 200 and specified food dog', () => {
        const dogId = 2;
        const expecteddog = testdog[dogId - 1];

        return supertest(app)
          .get(`/api/dog/${dogId}`)
          .expect(200, expecteddog)
      })
    })
  });

  describe(`DELETE /api/dog/:id`, () => {
    context(`Given no dog in the database`, () => {
      it(`responds with 404`, () => {
        const dogId = 123456;
        return supertest(app)
          .delete(`/api/dog/${dogId}`)
          .expect(404, {
            error: { message: `Dog doesn't exist`}
          })
      })
    });

    context('Given there are dog in the database', () => {
      const testdog= makePetfulArray();

      beforeEach('insert dog', () => {
        return db
          .into('dog')
          .insert(testdog)
      })

      it('get dog from store with 204', () => {
        const idToRemove = 3;
        const expecteddog = testdog.filter(dog => dog.id !== idToRemove)
        
        return supertest(app)
          .delete(`/api/dog/${idToRemove}`)
          .expect(204)
          .then(res =>
            supertest(app)
              .get(`/api/dog`)
              .expect(expecteddog)
          )
      })
    });
  });

  describe(`PATCH /api/dog/:id`, () => {
    context(`Given no dog in the database`, () => {
      it(`responds with 404`, () => {
        const dogId = 123456;
        return supertest(app)
          .delete(`/api/dog/${dogId}`)
          .expect(404, {
            error: { message: `Dog doesn't exist`}
          })
      })
    });

    context('Given there are dog in the database', () => {
      const testdog = makePetfulArray();
      
      beforeEach('insert dog', () => {
        return db
          .into('dog')
          .insert(testdog)
      })

      it('Responds wtih 204 and update dog', () => {
        const idToUpdate = 4;
        const testdog = makePetfulArray();
        const updateDog = {
          
        };
        const expecteddog = {
          ...testdog[idToUpdate - 1],
          ...updateDog
        };

        return supertest(app)
          .patch(`/api/dog/${idToUpdate}`)
          .send(updateDog)
          .expect(204)
          .then(res => 
            supertest(app)
              .get(`/api/dog/${idToUpdate}`)
              .expect(expecteddog)
          )
      });
    });
  });

});


