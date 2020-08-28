import {combineReducers} from "redux-immutable"
import cartReducer from './cart'
import detailRedeuer from './detailReduer'
// 合并多个reducer
export default combineReducers({cartReducer,detailRedeuer})