import {
    SET_CART_LIST,
    UPDATE_ISCHOOSED,
    SET_PROMOTIONS,
    UPDATE_CART_CODE_LIST
} from '../actionsType/cart'

const setCartList = (cartlist)=>({
        type:SET_CART_LIST,
        cartlist
})
const updateCartCodeList = (cartcodelist)=>({
    type:UPDATE_CART_CODE_LIST,
    cartcodelist
})
const updateIschoosed = (index,ischoosed) =>({
    type:UPDATE_ISCHOOSED,
    index,
    ischoosed
})
const setPromotions = (promotions)=>({
    type:SET_PROMOTIONS,
    promotions
})

export {
    setCartList,
    updateIschoosed,
    setPromotions,
    updateCartCodeList
}
