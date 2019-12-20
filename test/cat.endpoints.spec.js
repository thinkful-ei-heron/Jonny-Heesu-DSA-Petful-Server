const knex = require('knex');
const app = require('../src/app');
const { makePetfulArray } = require('./fixture');

describe('Cat Endpoints', function() {
  after('disconnect from db', () => db.destroy());
  before('clean the table', () => db.raw('TRUNCATE CAT RESTART IDENTITY CASCADE'));
  afterEach('cleanup',() => db.raw('TRUNCATE CAT RESTART IDENTITY CASCADE'));

  describe(`GET /api/cat`, () => {
    context(`Given no cat`, () => {
      it(`Responds with 200 and empty list`, () => {
        return supertest(app)
          .get('/api/cat')
          .expect(200, [])
      })
    });

    context(`Given cat in database`, () => {
      const testcat = makePetfulArray();

      beforeEach(`Insert cat`, () => {
        return db
          .into('cat')
          .insert(testcat)
      })

      it('Responds with 200 and get all store', () => {
        return supertest(app)
          .get('/api/cat')
          .expect(200, testcat)
      })
    });
  });


  describe(`GET /api/cat/:id`, () => {
    context(`Given no cat`, () => {
      it(`Responds with 404`, () => {
        const catId = 123456;

        return supertest(app)
          .get(`/api/cat/${catId}`)
          .expect(404, {
            error: {
              message: `Cat doesn't exist`
            }
          })
      })
    });

    context(`Given cat in database`, () => {
      const testcat = makePetfulArray();

      beforeEach(`Insert cat`, () => {
        return db
          .into('cat')
          .insert(testcat)
      })

      it('Responds with 200 and specified food cat', () => {
        const catId = 2;
        const expectedcat = testcat[catId - 1];

        return supertest(app)
          .get(`/api/cat/${catId}`)
          .expect(200, expectedcat)
      })
    })
  });

  describe(`DELETE /api/cat/:id`, () => {
    context(`Given no cat in the database`, () => {
      it(`responds with 404`, () => {
        const catId = 123456;
        return supertest(app)
          .delete(`/api/cat/${catId}`)
          .expect(404, {
            error: { message: `Cat doesn't exist`}
          })
      })
    });

    context('Given there are cat in the database', () => {
      const testcat= makePetfulArray();

      beforeEach('insert cat', () => {
        return db
          .into('cat')
          .insert(testcat)
      })

      it('get cat from store with 204', () => {
        const idToRemove = 3;
        const expectedcat = testcat.filter(cat => cat.id !== idToRemove)
        
        return supertest(app)
          .delete(`/api/cat/${idToRemove}`)
          .expect(204)
          .then(res =>
            supertest(app)
              .get(`/api/cat`)
              .expect(expectedcat)
          )
      })
    });
  });

  describe(`PATCH /api/cat/:id`, () => {
    context(`Given no cat in the database`, () => {
      it(`responds with 404`, () => {
        const catId = 123456;
        return supertest(app)
          .delete(`/api/cat/${catId}`)
          .expect(404, {
            error: { message: `Cat doesn't exist`}
          })
      })
    });

    context('Given there are articles in the database', () => {
      const testcat = makePetfulArray();
      
      beforeEach('insert cat', () => {
        return db
          .into('cat')
          .insert(testcat)
      })

      it('Responds wtih 204 and update recipe', () => {
        const idToUpdate = 4;
        const testcat = makePetfulArray();
        const updateCat = {
          
        };
        const expectedcat = {
          ...testcat[idToUpdate - 1],
          ...updateCat
        };

        return supertest(app)
          .patch(`/api/cat/${idToUpdate}`)
          .send(updateCat)
          .expect(204)
          .then(res => 
            supertest(app)
              .get(`/api/cat/${idToUpdate}`)
              .expect(expectedcat)
          )
      });
    });
  });

});


