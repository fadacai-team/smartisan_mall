import {combineReducers} from "redux-immutable"
import cartReducer from './cart'
import detailRedeuer from './detailReduer'
import goodsReducer from './goodswarp'
// 合并多个reducer
export default combineReducers({cartReducer,detailRedeuer,goodsReducer})

