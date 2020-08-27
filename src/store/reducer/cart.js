import {Map,fromJS} from 'immutable'
import {
    SET_PROMOTIONS,
    SET_RENDER_CART,
    UPDATE_ITEM_COUNT,
    UPDATE_ISCHOOSED,
    CECHK_ALL_CART_ITEMS,
    SYNC_CART_ITEMS,
    SET_CART,
    DEL_ITEMS,
    FLAG_DEL,
    CHANGE_PAYMENT
} from '../actionsType/cart'

var cartState = fromJS({
    ischeckAllCart:true,
    isEditCheckAll:false,
    promotions:[],

    cart_list_fromSmartisan:[],

    cart_render_list:[],
    cart:{
        cart_items:[
            {id: 100142001, count: 1 ,unpateTime:1598268595478},
            {id: 100059411, count: 3 , unpateTime:1598268595478},
            {id: 100145701, count: 1 , unpateTime:1598268595478}
        ],
        unlogin_items:[
            {id: 100142001, count: 1 , unpateTime:1598268595478},
            {id: 100059411, count: 1 , unpateTime:1598268595478},
            {id: 1001457671, count: 1 , unpateTime:1598268595478}
        ],
    },

    payment:'wechat',

})

function getRenderCartList(origin_list,state){
    console.log(state)
    var new_render_list =  origin_list.map(v=>{
        var gifts = state.get('promotions').filter(pv=>{
            return pv.getIn(['rule','condition','main_skus']).includes(v.id) 
        })
        var currentItem = state.getIn(['cart','cart_items']).filter(item=>{
            console.log()
            return item.get('id') == v.id
        }).get(0)
        return Map({
            id:v.id,
            name:v.product_info.product_name,
            price:v.price,
            origin_price:v.origin_price,
            attr_info:v.attr_info,
            count:currentItem.get('count'),
            imageurl:v.shop_info.ali_image,
            activety_title:'',
            gifts:gifts,
            checked:true,
            del:false
        })
    })
    return new_render_list
}
function syncCart(state){
    var newCartState = state.get('cart_render_list').map(v=>{
        return Map(
            {id: v.get('id'), count: v.get('count') ,unpateTime:new Date().getTime()},
        )
    })
    console.log('cart sync to localstorage')
    localStorage.setItem('cart',JSON.stringify(state.get('cart').toJS()))
    return fromJS(newCartState)
}

export default function(state = cartState, action){
    switch(action.type){
        case SET_CART:
            return state.set('cart',fromJS(action.cart))
        //初始化渲染列表
        case SET_RENDER_CART:
            return state.set('cart_list_fromSmartisan',action.cart_list).set('cart_render_list',getRenderCartList(action.cart_list,state))
        //更新商品数量
        case UPDATE_ITEM_COUNT:
            var id = action.id
            var count = action.count
            var index = -1
            state.get('cart_render_list').forEach((v,i)=>{
                if(id==v.get('id')){
                    index = i
                }
            })
            if(index>-1) return state.setIn(['cart_render_list',index,'count'],count)
            else return state
        //获取优惠信息
        case SET_PROMOTIONS:
            var promotions = state.set('promotions',fromJS(action.promotions))
            return promotions
        //更新购物车选择
        case UPDATE_ISCHOOSED:
            if(action.ischoosed){
                var isallchoosed =true
                state.setIn(['cart','cart_items',action.index,'checked'],action.ischoosed).getIn(['cart','cart_items']).forEach(v=>{
                    if(v.get('checked') == false){
                        isallchoosed = false
                    }
                })
                return state.set('ischeckAllCart',isallchoosed)
                                .setIn(['cart_render_list',action.index,'checked'],action.ischoosed)
            }else if(action.ischoosed==false){
                return state.set('ischeckAllCart',action.ischoosed)
                                .setIn(['cart_render_list',action.index,'checked'],action.ischoosed)
            }
            return
        //全选不全选购物车列表
        case CECHK_ALL_CART_ITEMS:
            console.log(action.optiontype)
            if(action.optiontype=='del'){
                return state.setIn(['cart_render_list'],state.get('cart_render_list').map(v=>{
                                    return v.set('del',action.ischeckall)
                                }))
            }else if(action.optiontype == 'checked'){
                return state.setIn(['cart_render_list'],state.get('cart_render_list').map(v=>{
                                    return v.set('checked',action.ischeckall)
                                }))
            }
        // 把render_list 同步到 cart
        case SYNC_CART_ITEMS:
            return state.setIn(['cart','cart_items'],syncCart(state))
        //标记 render list里要删除的的items
        case FLAG_DEL:
            var id = action.id
            var newrenderlist = state.get('cart_render_list').map((v,i)=>{
                if(id==v.get('id')){
                    return v.set('del',!v.get('del'))
                }else{
                    return v
                }
            })
            return state.set('cart_render_list',newrenderlist)
    
        case DEL_ITEMS:
            var newrenderlist = state.get('cart_render_list').filter((v,i)=>{
                return v.get('del')==false
            })
            console.log('new list',newrenderlist)
            return state.set('cart_render_list',newrenderlist)


        case CHANGE_PAYMENT:
            return state.set('payment',action.paytype)
        default:
            break
    }
    return state
}