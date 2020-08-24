import {combineReducers} from "redux-immutable"
import cartReducer from './cart'
// 合并多个reducer
export default combineReducers(cartReducer)