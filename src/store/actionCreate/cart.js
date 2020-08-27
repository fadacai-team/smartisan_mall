import {
    UPDATE_ISCHOOSED,
    SET_PROMOTIONS,
    CECHK_ALL_CART_ITEMS,
    UPDATE_ITEM_COUNT,
    SET_RENDER_CART,
    SYNC_CART_ITEMS,
    SET_CART,
    DEL_ITEMS,
    FLAG_DEL,
    CHANGE_PAYMENT
} from '../actionsType/cart'

const setRenderCart = (cart_list)=>({
    type:SET_RENDER_CART,
    cart_list
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
const checkAllCartItems = (optiontype,ischeckall)=>({
    type:CECHK_ALL_CART_ITEMS,
    ischeckall,
    optiontype
})

const updateItemCount = (id,count)=>({
    type:UPDATE_ITEM_COUNT,
    id,count
})
const syncCart = ()=>({
    type:SYNC_CART_ITEMS,
})

const setCart = (cart) =>({
    type:SET_CART,
    cart
})

const delCartItems = ()=>({
    type:DEL_ITEMS,
})
const flagDel = (id) => ({
    type:FLAG_DEL,
    id
})
const changePayment = (paytype)=>({
    type:CHANGE_PAYMENT,
    paytype
})
export {
    updateItemCount,
    updateIschoosed,
    setPromotions,
    checkAllCartItems,
    setRenderCart,
    syncCart,
    setCart,
    delCartItems,
    flagDel,
    changePayment
}
