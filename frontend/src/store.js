import thunk from 'thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer'

const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userFromStorage} 
}

const reducers = combineReducers({
    userLogin: userReducer
})

const middleware = [ thunk ]

const store = createStore(initialState, reducers, composeWithDevTools(applyMiddleware(middleware)))

export default store 