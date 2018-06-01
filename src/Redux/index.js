import {createStore, combineReducers} from 'redux'
import history from './history'
import options from './options'

const rootReducer = (combineReducers({history, options}))

let store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState())
})

export default store;