import { includeFavourite, userFavourites, fetchFavourites, newFavourite, removeFavourite } from '../favourites'
import { getFavourites, addFavourite, deleteFavourite } from '../../apis/api'

jest.mock('../../apis/api')

describe('Display favourites', () => {
  const fakeFavs = [
    { id: '1', word: 'hi', image: 'https://greeting' },
    { id: '2', word: 'cheese', image: 'https://brie.co' },
    { id: '3', word: 'happy', image: 'https://happy.me' }
  ]

  getFavourites.mockReturnValue(Promise.resolve(fakeFavs))

  describe('userFavourites', () => {
    it('set the displayed favorites in the store', () => {
      expect.assertions(2)
      const action = userFavourites(fakeFavs)
      expect(action.type).toBe('SET_FAVOURITES')
      expect(action.favourites).toBe(fakeFavs)
    })
  })

  describe('fetchFavourites', () => {
    it('gets the categories and calls displayCategories', () => {
      const dispatch = jest.fn()

      expect.assertions(4)
      return fetchFavourites()(dispatch)
        .then(() => {
          expect(dispatch).toHaveBeenCalled()
          expect(dispatch.mock.calls[0][0].type).toBe('SET_FAVOURITES')
          expect(dispatch.mock.calls[0][0].favourites).toBe(fakeFavs)
          expect(dispatch.mock.calls[0][0].favourites).toHaveLength(3)
          return null
        })
    })
  })
})

describe('Modify favourites', () => {
  const fakeFav = [
    { id: '2', word: 'cheese', image: 'https://brie.co' }
  ]

  addFavourite.mockReturnValue(Promise.resolve(fakeFav))
  deleteFavourite.mockReturnValue(Promise.resolve(null))

  describe('includeFavourite', () => {
    it('add a new favorite item in the store', () => {
      expect.assertions(2)
      const action = includeFavourite(fakeFav)
      expect(action.type).toBe('ADD_FAVOURITES')
      expect(action.favourite).toBe(fakeFav)
    })
  })

  describe('newFavourite', () => {
    it('gets the new favorite item and calls addFavourite', () => {
      const dispatch = jest.fn()

      expect.assertions(3)
      return newFavourite()(dispatch)
        .then(() => {
          expect(dispatch).toHaveBeenCalled()
          expect(dispatch.mock.calls[0][0].type).toBe('ADD_FAVOURITES')
          expect(dispatch.mock.calls[0][0].favourite).toBe(fakeFav)
          return null
        })
    })
  })

  describe('removeFavourite', () => {
    it('deletes an existing favorite and calls displayCategories', () => {
      const dispatch = jest.fn()

      expect.assertions(3)
      return removeFavourite()(dispatch)
        .then(() => {
          expect(dispatch).toHaveBeenCalled()
          expect(dispatch.mock.calls[0][0].type).toBe('SET_FAVOURITES')
          expect(dispatch.mock.calls[0][0].favourite).toBeUndefined()
          return null
        })
    })
  })
})
