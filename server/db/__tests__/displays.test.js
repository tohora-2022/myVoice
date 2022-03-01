const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)
const db = require('../displays')

beforeAll(() => testDb.migrate.latest())

beforeEach(() => testDb.seed.run())

describe('getCategories', () => {
  test('gets the list of categories from seed data', () => {
    expect.assertions(4)
    return db.getCategories(testDb)
      .then(categories => {
        expect(categories[0]).toEqual({ id: 101, category: 'quick', image: null })
        expect(categories[2]).toEqual({ id: 103, category: 'descriptions', image: '/images/descriptions/descriptions-category.png' })
        expect(categories[4]).toEqual({ id: 105, category: 'people', image: '/images/people/people-category.png' })
        expect(categories[7]).toEqual({ id: 108, category: 'clothes', image: '/images/clothes/clothes-category.png' })
        return null
      })
  })
})

describe('getItems', () => {
  it('gets a list of items in a given category.', () => {
    expect.assertions(2)
    return db.getItems(102, testDb)
      .then(items => {
        expect(items[0]).toEqual({
          itemId: 1,
          word: 'all done',
          itemImage: '/images/actions/all_done.png',
          tag: 'verb',
          categoryId: 102,
          category: 'actions'
        })
        expect(items[8]).toEqual({
          itemId: 9,
          word: 'want',
          itemImage: '/images/actions/want.png',
          tag: 'verb',
          categoryId: 102,
          category: 'actions'
        })
        return null
      })
  })
})
