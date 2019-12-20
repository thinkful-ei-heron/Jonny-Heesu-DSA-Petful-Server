const knex = require('knex');
const app = require('../src/app');

describe('Dog Endpoints', function() {
  after('disconnect from db', () => db.destroy());
  before('clean the table', () => db.raw('TRUNCATE DOG RESTART IDENTITY CASCADE'));
  afterEach('cleanup',() => db.raw('TRUNCATE DOG RESTART IDENTITY CASCADE'));

  describe(`GET /api/dog`, () => {
    context(`Given dog in database`, () => {
      beforeEach(`Insert dog`, () => {
        return db
          .into('dog')
          .insert(testdog)
      })

      it('Responds with 200 and get all store', () => {
        return supertest(app)
          .get('/api/dog')
          .expect(200)
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
      beforeEach(`Insert dog`, () => {
        return db
          .into('dog')
          .insert(testdog)
      })

      it('Responds with 200 and specified food dog', () => {
        return supertest(app)
          .get(`/api/dog/${dogId}`)
          .expect(200)
      })
    })
  });

  describe(`DELETE /api/dog/:id`, () => {
    context('Given there are dog in the database', () => {
      const testdog= makePetfulArray();

      beforeEach('insert dog', () => {
        return db
          .into('dog')
          .insert(testdog)
      })
    });
  });

});


