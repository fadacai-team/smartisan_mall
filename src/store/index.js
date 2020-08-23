// 1.引入redux 的中间件
import { createStore,applyMiddleware } from 'redux'
// 2. dispatch 里面派发 function 引入redux-thunk
import reduxThunk from 'redux-thunk'
import rootReducer from './reducer'

// 3.作为第二参数，传入到createStore
export default createStore(rootReducer,applyMiddleware(reduxThunk))