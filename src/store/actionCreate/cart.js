import {
    SET_CART_LIST
} from '../actionsType/cart'

const setCartList = (cartlist)=>({
        type:SET_CART_LIST,
        cartlist
})

export {
    setCartList,
}
