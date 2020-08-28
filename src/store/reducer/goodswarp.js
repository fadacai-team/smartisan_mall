import {GOODS_LIST,GOODWATERS,GOODS_ROW} from '../actionsType/goodswarp'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    num:778,
    goods:[],
    goods1:{},
    goods2:{},
    goods3:{},
    goods_rows:[

    ],
    image_rows:[

    ],
    
    goodsWater1:[],
    goodsItem:[],
    // 数码热销
    Digital:[],
    // 电器热销
    Electric:[],
    // 厨具热销
    Kitchenware:[],
    // 超然品推荐
    Detachment:[]
    // foods_item:[]
})


export default function(state=defaultState,action){
    switch(action.type){
        case GOODS_LIST:
            // console.log(action.payload.data)
            return state.set('goods_rows',fromJS(
                [
                    action.payload.data[4],
                    action.payload.data[5],
                ]
            )).set('image_rows',fromJS(
                [action.payload.data[6]]
                
            ));
        case GOODWATERS:
                // console.log(action.payload.data1.skuInfo)
                // console.log(state.get('goodsItem'))
            return state.set('goodsWater1',fromJS(
                [
                    action.payload.data1
                ]
            )).set('goodsItem',fromJS(
                state.get('goodsItem').concat(action.payload.data1.skuInfo)
            ))
        case GOODS_ROW:
            console.log(action.payload.data)
            return state.set("Digital",fromJS(
                [action.payload.data[6]]
            )).set('Electric',fromJS(
                [action.payload.data[7]]
            )).set('Kitchenware',fromJS(
                [action.payload.data[8]]
            )).set('Detachment',fromJS(
                [action.payload.data[9]]
            ))
        
            // break; 
        default:
            break
    }
    return state
}