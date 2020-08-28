import {combineReducers} from "redux-immutable"
import cartReducer from './cart'
import goodsReducer from './goodswarp'
// 合并多个reducer
export default combineReducers({cartReducer,goodsReducer})