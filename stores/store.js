import { createStore } from 'redux'
import todoApp from '../reducers/reducers'

 let store = createStore(todoApp);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


export default store;