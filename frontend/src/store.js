import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer, userRegisterReducer } from './reducers/userReducer'

const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const reducers = combineReducers({
    userLogin: userReducer,
    userRegister: userRegisterReducer
})

const initialState = {
    userLogin: { userInfo: userFromStorage} 
}

const middleware = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store 