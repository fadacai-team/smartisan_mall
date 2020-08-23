import {Map} from 'immutable'
import {SET_CART_LIST} from '../actionsType/cart'

var cartState = Map({
    CartItems:[]
        
})
export default function(state = cartState, action){
    switch(action.type){
        case SET_CART_LIST:
            return state.set('CartItems',action.cartlist)
            break
    }
    return state
}