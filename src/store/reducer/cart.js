import {Map,List, fromJS} from 'immutable'
import {
    SET_CART_LIST, 
    UPDATE_ISCHOOSED,
    SET_PROMOTIONS,
    UPDATE_CART_CODE_LIST
} from '../actionsType/cart'

var cartState = fromJS({
    promotions:[],
    cartItemList:[],
    cartCodeList:[
        {utime: 1598011036381, goods_code: 100142001, count: 1, ctime: 1598011036381},
        {utime: 1598167967669, goods_code: 100047001, count: 1, ctime: 1598167967669},
        {utime: 1597731569003, goods_code: 100145701, count: 1, ctime: 1597731569003}
    ]
        
})
export default function(state = cartState, action){
    switch(action.type){
        case SET_PROMOTIONS:
            var promotions = state.set('promotions',fromJS(action.promotions))
            return promotions
        case UPDATE_CART_CODE_LIST:
            var newcodelist =  state.get('cartCodeList').map(v=>{
                return Map(v).set('gifts', state.get('promotions').filter(pv=>{
                    console.log(pv.getIn(['rule','condition','main_skus']).includes(v.get('goods_code')) )
                    return pv.getIn(['rule','condition','main_skus']).includes(v.get('goods_code')) 
                }))
            })
            console.log(newcodelist.toJS())
            return state.set('cartCodeList',newcodelist)
        case SET_CART_LIST:
            var newCart = state.set('cartItemList',List(action.cartlist)).get('cartItemList').map(v=>{
                return Map(v).set('choosed',true)
            })
            return state.set('cartItemList',newCart)
        case UPDATE_ISCHOOSED:
            return state.setIn(['cartItemList',action.index,'choosed'],action.ischoosed)
        default:
            break
    }
    return state
}