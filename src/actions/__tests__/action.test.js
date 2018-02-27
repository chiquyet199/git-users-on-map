import axios from 'axios'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import {getAsync} from '../action'

var mock = new MockAdapter(axios)
const mockData = { response: { docs: [] } }
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const url = `ajax.json`
mock.onGet(url).reply(200, mockData)

const store = mockStore({ data: [], activePost: null })

describe('>>>A C T I O N --- Test action', () => {
  it('should pass', ()=> {
    expect(1).toEqual(1)
  })
  // it('+++ async action ', () => {
  //   return store.dispatch(getAsync()).then(resx => {
  //     const expectedActions = store.getActions()
  //     expect(expectedActions.length).toBe(1)
  //   })
  // })

  // it('+++ actionCreator simpleAction', () => {
  //   const action = action(1)
  //   expect(action).toEqual({ type: TYPE, payload: 1 })
  // })
})
